const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new NodePolyfillPlugin()
    ]
}