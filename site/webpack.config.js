var path = require ('path');

module.exports = {
	entry: './public/js/game.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};