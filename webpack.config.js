const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.join(__dir, '/dist'),
        filename: 'index_bundle.js'
    }, 

    module:  {
        rules: [
            {
                test
            }
        ]
    }
}