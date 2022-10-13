const express = require('express');
const router = express.Router();

const coin_Controller = require('../controllers/coinController');

router.get('/coinlist', coin_Controller.list);

module.exports = router;
