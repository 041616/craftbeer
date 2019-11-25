const path = require('path');
const variables = require(path.resolve(__dirname, './postcss.variables.js'));


module.exports = ({ webpack: { mode } }) => ({
    parser: 'sugarss',
    plugins: [
        require('postcss-simple-vars')({ variables }),
        require('postcss-nested'),
        require('postcss-extend'),
        require('postcss-hexrgba'),
        require('postcss-color-function'),
        require('postcss-calc'),
    ],
});
