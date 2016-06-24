var webpack = require('webpack'),
    path    = require('path'),
    BUILD_DIR,
    APP_DIR,
    config;

APP_DIR = path.resolve(__dirname, 'src/');
BUILD_DIR = path.resolve(__dirname, 'bin/');

config = {
    entry: APP_DIR,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel'
        }]
    }
};

module.exports = config;