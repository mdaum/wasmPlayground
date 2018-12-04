const util = require('util');

(async function () {
    try {
        const exports = await require('./addWrapped');
        console.log(util.inspect(exports, true, 2));
        const thing = exports.__post_instantiate();
        console.log(thing);
        console.log(util.inspect(exports, true, 2));
        console.log(exports._add(9, 9));
    } catch (e) {
        console.log(e);
    }
})();