// let login = prompt ('Ваш логин?', '')
// let parol;
// if (login == 'Админ') {
//   parol = prompt ('Пароль', '');
// } else if (login == null || login == '') {
//   alert ('Отменено');
// } else {
//   alert ('Я вас не знаю');
// }
// if (parol == 'Я главный') {
//   alert ('Здравствуйте!');
// } else if (parol == null) {
//   alert('Отменено');
// } else {
//   alert('Неверный пароль');
// }




// Мое решение:
function pow(x,n) {
  return x**n;
  }
  
  let x = +prompt (`Введите число х`, '1');
  let n = +prompt (`Введите число n`, '1');
  let result = pow(x,n);
  
  if (n >= 1) {
    alert (result);
  } else {
    alert (`n должно быть целым и больше 1`);
  }
  