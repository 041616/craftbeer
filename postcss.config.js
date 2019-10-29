const path = require('path');
const variables = require(path.resolve(__dirname, './postcss.variables.js'));


module.exports = ({ webpack: { mode } }) => ({
    parser: 'sugarss',
    plugins: [
        require('postcss-url')({ url: ({ url }) => {
            if (!url || url.startsWith('data:image')) return url;
            if (mode === 'development') return `/${url}`;
            return `../${url}`;
        } }),
        require('postcss-simple-vars')({ variables }),
        require('postcss-nested'),
        require('postcss-extend'),
        require('postcss-color-function'),
        require('postcss-calc'),
    ],
});
