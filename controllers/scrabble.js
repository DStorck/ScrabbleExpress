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
  },


  scoreWord: function (request, response){
    var locals = {}
    locals.message = ''
    locals.word = request.params.word
    locals.score = scrabble.score(locals.word)
    if (isNaN(locals.score)){
      locals.message = "Sorry, that is not a word that can be scored."
    }

    response.render('score-word', locals)
  },

  scoreWordForm: function(request, response){

    response.render('score_form')
  },

  showScore: function(request, response){
    var locals = {}
    locals.word = request.body.word
    locals.score = scrabble.score(request.body.word)
    locals.message = ''
    if (isNaN(locals.score)){
      locals.message = "Sorry, that is not a word that can be scored."
    }
    response.render('score-word', locals)
  }
}

module.exports = ScrabbleController
