const express = require('express');
const { storeJson, retrieveJson } = require('../controllers/apiController');
const router = express.Router();

router.post('/store', storeJson);
router.get('/retrieve', retrieveJson);

module.exports = router;
