/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  for (var i=0; i=romanNumeral.length; i++){
    return DIGIT_VALUES.value(i)
  } for (var i=0; i=romanNumeral[1]; i++) {
    
  }

  
  
  // for (var i=1; i<4; i++){
  //   return I.concat(I);
  // } 
  // for (var i=4; i<5; i++){
  //   return I.concat(V);
  // }
  // for (var i=5; i<8; i++){
  //   return V.concat(I++);
  // }
  // for (var i=9; i<10; i++){
  //   return I.concat(X);
  // }
  // for (var i=10; i<20; i++){
  //   return I.concat(I);
  // }  
};

