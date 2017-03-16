var value = prompt("Enter num");
var value2 =[];
while (value !== 0){
  var a = value % 2;
  value = Math.floor(value/2);
  value2.unshift(a);
}
alert(value2.join(''));
