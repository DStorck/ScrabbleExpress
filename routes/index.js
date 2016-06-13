var express = require('express');
var router = express.Router();
var ScrabbleController = require('../controllers/scrabble')

/* GET home page. */

router.get('/', ScrabbleController.index)






/* GET home page. */

router.get('/scrabble/chart', ScrabbleController.displayChart)


module.exports = router;
