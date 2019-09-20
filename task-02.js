const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  const length = words.length;
  const total = length * pricePerWord;
  return total;
};

const pricePerWord = 10;
const message = 'Proin sociis natoque et magnis parturient montes mus'

console.log(calculateEngravingPrice(message, pricePerWord));
