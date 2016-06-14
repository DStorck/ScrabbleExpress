var express = require('express');
var router = express.Router();
var ScrabbleController = require('../controllers/scrabble')

/* GET home page. */

router.get('/', ScrabbleController.index)

router.get('/scrabble/score/:word', ScrabbleController.scoreWord)

router.get('/scrabble/score', ScrabbleController.scoreWordForm)

router.post('/scrabble/score', ScrabbleController.showScore)








/* GET home page. */

router.get('/scrabble/chart', ScrabbleController.displayChart)


module.exports = router;
