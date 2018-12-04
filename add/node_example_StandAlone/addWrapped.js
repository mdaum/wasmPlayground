const fs = require('fs');

async function loadWebAssembly (filename) {
    // load and compile target wasm file
    const file = fs.readFileSync('./test.wasm');
    const buffer = new Uint8Array(file);

    const importObject = {
        env: {
            STACKTOP: 0,
            STACK_MAX:65536,
            abortStackOverflow: function(val) { throw new Error("stackoverflow"); },
            __memory_base: 0,
            __table_base: 0,
            memory: new WebAssembly.Memory({initial: 256}),
            table: new WebAssembly.Table({initial:0, element: 'anyfunc'})
        }
    }
    const module = await WebAssembly.instantiate(buffer, importObject);
    const instance = module.instance;
    return instance.exports;
}

const addModule = loadWebAssembly('./add.wasm');

// each of the functions loaded are accessible with original name prefixed with '_'
module.exports = addModule;