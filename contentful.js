const contentful = require('contentful');

module.exports = contentful.createClient({
    space: 'i70jiwebm7c8',
    host: 'cdn.contentful.com',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'Ktd0J3PL1ICL_TifyT4kfSLUy3h17rVFwWGctliwNeA', //API Key 
});