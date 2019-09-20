const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (isLoginUnique(allLogins, login) === false) {
    return 'Такой логин уже используется!';
  }
  if (isLoginUnique(allLogins, login) === true) {
    return allLogins.push(login), 'Логин успешно добавлен!';
  }
};

console.log(addLogin(logins, 'Ajax'));
console.log(logins);
