function createCounter () {
  var value = 0;
  return function () {
    return value++;
  };
}

for (var i = 0; i < 10; i++) {
  var a = createCounter(); 
  setTimeout(function()
  {
   console.log(a());
  }, 1000);
}
