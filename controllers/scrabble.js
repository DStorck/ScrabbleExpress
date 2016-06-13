var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble
var ScrabbleController = {
  index:  function(req, res, next){
    res.render('index',  { title: "Scrabble scrabble scrabble"})
  },

  displayChart: function (request, response){
    var locals = {}

    locals.title = 'Time to Scrabble'
    locals.letter_scores = scrabble._letter_scores

    response.render('displayChart', locals)
  }
}

module.exports = ScrabbleController
