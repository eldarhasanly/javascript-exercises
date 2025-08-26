const palindromes = function (str) {
    str = str.trim();

    const cleanTxt = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedTxt = cleanTxt.split("").reverse().join("");

    if (cleanTxt === reversedTxt) {
      return true;
    } else {
      return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
