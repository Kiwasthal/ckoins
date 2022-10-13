const express = require('express');
const router = express.Router();

const coin_Controller = require('../controllers/coinController');

router.get('/coinlist', coin_Controller.list);

router.get('/trending', coin_Controller.trending);

router.get('/pagination/:pageSize/:currentPage', coin_Controller.pagination);

router.get('/chart/:id/:timespan', coin_Controller.chart);

router.get('/coin/:id', coin_Controller.coin);

module.exports = router;
