const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login;

const isLoginValid = function (login) {
  if (login.length < 4 || login.length >= 16) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  } else return true;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login, 0)) {
    console.log('Такой логин уже используется!');
    return false;
  } else return true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    console.log('Логин успешно добавлен!');
    allLogins.push(login);
    console.log(allLogins);
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
