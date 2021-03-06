module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        env: {
            production: {
                plugins: ['react-native-paper/babel']
            }
        },
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        '#navigation': './src/navigation',
                        '#enums': './src/enums',
                        '#screens': './src/screens',
                        '#services': './src/services',
                        '#components': './src/components'
                    },
                    extensions: ['.js', '.ts']
                }
            ]
        ]
    };
};
