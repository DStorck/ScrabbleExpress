var Scrabble = function() {
  this._letter_scores = {
    A: 1, B: 3, C: 3, D: 2,
    E: 1, F: 4, G: 2, H: 4,
    I: 1, J: 8, K: 5, L: 1,
    M: 3, N: 1, O: 1, P: 3,
    Q: 10, R: 1, S: 1, T: 1,
    U: 1, V: 4, W: 4, X: 8,
    Y: 4, Z: 10
  }
};

Scrabble.prototype.score = function(word) {
  var upword = word.toUpperCase();
  var score = 0;
  for (var letter of upword) {
    score += this._letter_scores[letter];
  }
  if (word.length === 7) {
    score += 50;
  }
  return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords){
  var highest_score = this.score(arrayOfWords[0]);
  var winning_word = arrayOfWords[0];

  for (var word of arrayOfWords){
    var score = this.score(word);
    if ( score > highest_score ){
      highest_score = score;
      winning_word = word;
    }
    else if (score === highest_score && (winning_word.length > word.length && winning_word.length != 7)){
      highest_score = score;
      winning_word = word;
    }
    else if (score === highest_score && winning_word.length != 7 && word.length === 7) {
      highest_score = score;
      winning_word = word;
    }
  }
  return winning_word;

};

module.exports = Scrabble;
