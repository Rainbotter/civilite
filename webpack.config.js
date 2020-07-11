const path = require('path');

module.exports = {
    entry: "./src/server.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    target: "node",
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.ts?$/, use: ["ts-loader"], exclude: /node_modules/ }
        ]
    }
}
