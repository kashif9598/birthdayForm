const express = require('express');
const { create } = require('../controllers/peoples');
const router = express.Router();

//post people data api
router.route('/people').post(create);

module.exports = router;