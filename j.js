var login = "Admin123";
var password = "Zxc1234";
var log = prompt ("Введите логин");
if (log != login) {
  alert ("Такого админа не существует");
}else {
  var pass = prompt ("Введите пароль");
  if (pass !=password) {
    alert ("Пароль неправильный");
  }else {
    alert ("Привет, админ!")
  }
}
