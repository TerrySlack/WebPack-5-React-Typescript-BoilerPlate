module.exports = {
    plugins: [
        require('postcss-preset-env')({
            browsers: 'last 1 versions',
        }),
        require('autoprefixer'),
    ],
};
