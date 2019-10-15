const path = require('path');
const variables = require(path.resolve(__dirname, './postcss.variables.js'));


module.exports = ({ webpack: { mode } }) => ({
    parser: 'sugarss',
    plugins: [
        require('postcss-url')({ url: ({ url }) => (
            mode === 'development' ? `../../public/${url}` : `../${url}`
        ) }),
        require('postcss-simple-vars')({ variables }),
        require('postcss-nested'),
        require('postcss-extend'),
        require('postcss-color-function'),
    ],
});
