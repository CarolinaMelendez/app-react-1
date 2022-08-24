module.exports = {
    "env": {
        "browser": true,
        "es2021": true,

        "commonjs": true, 
        "es2021": true, 
        "node": true, 
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],


        "react/prop-types": "off",
        "react/jsx-key": "off"
    }
}
