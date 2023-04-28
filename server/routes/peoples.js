const express = require('express');
const { create, getPeople } = require('../controllers/peoples');
const router = express.Router();

//post people data api
router.route('/people').post(create);

//get people data api
router.route('/people').get(getPeople);

module.exports = router;