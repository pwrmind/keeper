(function(scope){
  var keeper = scope.keeper = scope.keeper || {};
  
  keeper.applyChanges = function() {
    var keys = Object.getOwnPropertyNames(keeper);
    for (var i = 0; i < keys.length; i++) {
      if(typeof(keeper[keys[i]]) === "function")
        continue;
      try {
         localStorage[keys[i]] = JSON.stringify(keeper[keys[i]]);
      }
      catch(err) {
        console.error("There is something wrong with \"" + localStorage.key(i) + "\" in storage.");
      }
    }
  };
  
  for (var i = 0; i < localStorage.length; i++) {
    try {
      keeper[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    catch(err) {
      console.error("There is something wrong with \"" + localStorage.key(i) + "\" in storage.");
    }
  }
  
})(window);