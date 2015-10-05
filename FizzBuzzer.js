var FizzBuzzer = function() {
  // default values
  var defaultStart = 1,
      defaultEnd = 100,
      defaultFizzValue = 3,
      defaultBuzzValue = 5;

  var fizzValue = defaultFizzValue;
  var buzzValue = defaultBuzzValue;

  var setFizzValue = function(newFizzValue) {
    if (!newFizzValue || (newFizzValue === buzzValue) || !parseInt(newFizzValue)) return false;
    fizzValue = Math.abs(parseInt(newFizzValue));
    return true;
  };

  var setBuzzValue = function(newBuzzValue) {
    if (!newBuzzValue || (newBuzzValue === fizzValue) || !parseInt(newBuzzValue)) return false;
    buzzValue = Math.abs(parseInt(newBuzzValue));
    return true;
  };

  var getFizzValue = function() {
    return fizzValue;
  };

  var getBuzzValue = function() {
    return buzzValue;
  };

  var getSequence = function(start, end) {
    start = start || defaultStart;
    end = end || defaultEnd;
    var sequence = [];
    for (var i = start; i <= end; i++) {
      var answer = "";
      if (i % fizzValue === 0) answer += "Fizz";
      if (i % buzzValue === 0) answer += "Buzz";
      if (answer === "") answer = i;
      sequence.push(answer);
    }
    return sequence;
  };

  return {
    getSequence: getSequence,
    setFizzValue: setFizzValue,
    setBuzzValue: setBuzzValue,
    getFizzValue: getFizzValue,
    getBuzzValue: getBuzzValue
  };
};
module.exports = FizzBuzzer;
