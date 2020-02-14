function convertToRoman(num) {
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var numerical = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var converted = '';
  
  for (var i = 0; i < numerical.length; i++) {
    while (numerical[i] <= num) {
      converted += roman[i];
      num -= numerical[i];
    }
  }
  return converted;
}

convertToRoman(36);