var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://layersony_db_user:hBIHJyXuuDgVLKPj@clustergallery.3pm0vvp.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://layersony_db_user:hBIHJyXuuDgVLKPj@clustergallery.3pm0vvp.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://layersony_db_user:hBIHJyXuuDgVLKPj@clustergallery.3pm0vvp.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
