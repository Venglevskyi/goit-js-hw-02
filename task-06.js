let input;

let total = 0;

let numbers = [];

while (input !== null) {
  input = prompt(`Введите число`);

  numbers.push(Number(input));
}

for (let number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
