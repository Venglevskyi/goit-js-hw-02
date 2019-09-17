const findLongestWord = function(string) {
  const words = string.split(' ');

  let LongestWord = words[0];

  for (const word of words) {
    if (word.length > LongestWord.length) {
      LongestWord = word;
    }
  }
  return LongestWord;
};

const string = 'The quick brown fox jumped over the lazy dog';

console.log(findLongestWord(string));
