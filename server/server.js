let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('../webpack.config');

let server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
})

server.listen(4000, 'localhost', function(error, result) {
    if (error) {
        return console.log(error);
    }
    console.log('Listening at http://localhost:4000/');
});
