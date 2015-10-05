var FizzBuzzer = function() {
  // default values
  var defaultStart = 1,
      defaultEnd = 100,
      defaultFizzValue = 3,
      defaultBuzzValue = 5;

  var fizzValue = defaultFizzValue;
  var buzzValue = defaultBuzzValue;

  var setFizzValue = function(newFizzValue) {
    if (newFizzValue === buzzValue || !parseInt(newFizzValue)) return;
    fizzValue = Math.abs(parseInt(newFizzValue));
  };

  var setBuzzValue = function(newBuzzValue) {
    if (newBuzzValue === newFizzValue || !parseInt(newBuzzValue)) return;
    buzzValue = Math.abs(parseInt(newBuzzValue));
  };

  var go = function(start, end) {
    start = start || defaultStart;
    end = end || defaultEnd;
    for (var i = start; i <= end; i++) {
      var answer = "";
      if (i % fizzValue === 0) answer += "Fizz";
      if (i % buzzValue === 0) answer += "Buzz";
      if (answer === "") answer = i;
      console.log(answer);
    }
  };

  return {
    go: go,
    setFizzValue: setFizzValue,
    setBuzzValue: setBuzzValue
  };
};
module.exports = FizzBuzzer;
