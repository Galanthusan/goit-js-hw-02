let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
    console.log(numbers);
  }
}

if (numbers.length === 0) {
  alert('Пустой массив!');
} else {
  for (let i = 0; i < numbers.length; i += 1) {
    total = total + numbers[i];
    console.log(numbers[i]);
  }
  alert(`'Общая сумма чисел равна ${total}'`);
}
