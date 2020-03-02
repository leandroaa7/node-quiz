module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        //especificar variáveis ambientes do node.js
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }

};