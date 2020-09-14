const CracoLessPlugin = require('craco-less');

/**
 * This file allows you to customize ant design,
 * it provide a way to override color, border radius, border color, etc.
 * please refer to https://ant.design/docs/react/customize-theme for more
 */
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#0C2B4D',
                            '@font-family': 'Montserrat, sans-serif',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
