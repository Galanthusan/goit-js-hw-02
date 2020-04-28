const calculateEngravingPrice = function (message, pricePerWord) {
  let regexp = /^[a-zA-Z ]*$/;
  if (!regexp.test(message)) {
    return 'Вы можете использовать только слова и пробел.';
  }

  let words = message.split(' ');
  console.log('Количество слов', words.length);

  let price = words.length * pricePerWord;
  console.log('Цена', price);
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
