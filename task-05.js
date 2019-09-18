const checkForSpam = function(string) {
  
    if (string.includes('sale') || string.includes('spam')) {
  
        return console.log('true');
  } else {
    
        return console.log('false');
  }
};

let string = '[SPAM] How to earn fast money?';
string = string.toLowerCase();

console.log(checkForSpam(string));
