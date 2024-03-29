const path = require('path');
const packages = path.join(__dirname, '..', 'packages');


module.exports = async ({ config }) => {
	config.module.rules.push({
		test: /\.stories\.jsx?$/,
		loaders: [require.resolve('@storybook/addon-storysource/loader')],
		enforce: 'pre'
	});

	return config;
};

