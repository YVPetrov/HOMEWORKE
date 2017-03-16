var bnd = function(fun, smth) {
  var bndArgs = [].slice.call(arguments, 2);
  return function() {
    var funArgs = [].slice.call(arguments);
    return fun.apply(smth, bndArgs.concat(funArgs));
  };
};

var a = {
  name: "Чуваааак",
  fun: function() {
    return ('Где моя тачка, ' + this.name + '?');
  }
};

var fun = bnd(a.fun, a);
console.log(fun());
