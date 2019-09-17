const formatString = function(string) {
  if (string.length > rowSize) {
    return string.substring(0, 40) + '...';
  } else {
    return string;
  }
};

const string = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
const rowSize = 40;

console.log(formatString(string));
