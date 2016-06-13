var express = require('express');
var router = express.Router();
var ScrabbleController = require('../controllers/scrabble')

/* GET home page. */

router.get('/', ScrabbleController.index)

router.get('/scrabble/score/:word', ScrabbleController.scoreWord)








/* GET home page. */

router.get('/scrabble/chart', ScrabbleController.displayChart)


module.exports = router;
