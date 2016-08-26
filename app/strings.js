exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {
    console.log(wordWrap);
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
