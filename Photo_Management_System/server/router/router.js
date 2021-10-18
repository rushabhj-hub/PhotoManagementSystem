const route = require('express').Router()
const controller = require('../controller/controller');
const store = require('../middleware/multer')


route.get('/', controller.home);
route.get('/sortbydateasc', controller.home1);
route.get('/sortbydatedesc', controller.home2);
route.get('/sortbysizeasc', controller.home3);
route.get('/sortbysizedesc', controller.home4);
route.post('/uploadmultiple', store.array('images', 12), controller.uploads);

module.exports = route;