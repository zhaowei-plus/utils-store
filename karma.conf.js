// Karma configuration
// Generated on Thu Apr 25 2019 09:56:39 GMT+0800 (GMT+08:00)

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        // 把祖尧测试的文件包含进来
        files: [
            'test/**/*.js'
        ],
        exclude: [],

        preprocessors: {
            'test/**/*.js': ['webpack', 'coverage']
        },
        reporters: ['progress', 'coverage'],

        /* 新增的配置项 */
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        concurrency: Infinity,
        webpack: {
            module: {
                rules: [{
                        test: /\.js$/,
                        use: {
                            loader: 'istanbul-instrumenter-loader',
                            options: {
                                esModules: true
                            }
                        },
                        enforce: 'pre',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['es2015'],
                                plugins: ['istanbul']
                            }
                        },
                        exclude: /node_modules/
                    }
                ]
            }
        }
    });
};