require("webassembly")
  .load("test.wasm")
  .then(module => {
    console.log("1 + 2 = " + module.exports.add(1, 2));
  });