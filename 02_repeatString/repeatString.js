const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    let longString = "";
    for (let i = 0; i < num; i++) {
      longString += string;
    }
    return longString;
  };

// Do not edit below this line
module.exports = repeatString;
