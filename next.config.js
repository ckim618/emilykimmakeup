const withSass = require('@zeit/next-sass');
const client = require('./contentful');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        localIdentName: '[folder]__[local]___[hash:base64:5]',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'sass-loader',
                {
                    loader: 'sass-resources-loader', // so that we don't need to import scss dependencies on every .scss
                    options: {
                        // Or array of paths
                        resources: ['./resources/scss/imports.scss'],
                    },
                },
            ],
        });
        return config;
    },
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
        };
    },
});
