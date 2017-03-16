var x1 = prompt('Введите первый массив через пробел').split(' ');
var x2 = prompt('Введите второй массив через пробел').split(' ');
var a = [];
for (var i = 0; i < x1.length; i++){
  var index = x2.indexOf(x1[i]);
  if (index >= 0) a.push(x1[i]);
}
console.log(x1, x2);
alert(a);
