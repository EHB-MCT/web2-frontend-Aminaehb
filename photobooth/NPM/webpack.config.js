const path = require('path');

module.exports = {
    entry: './photobooth/NPM/src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js',
    },
    mode: 'production',
    watch: true
};