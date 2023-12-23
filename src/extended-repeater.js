const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = '';
  let additionSeparator='';

  if (options.addition) addition = options.addition.toString();
  if (options.additionSeparator) additionSeparator = options.additionSeparator.toString();
  addition = addition + additionSeparator;

  if (options.additionRepeatTimes) addition = 
    addition.repeat(Number(options.additionRepeatTimes));

  if (options.additionSeparator) addition = addition.slice(0, -additionSeparator.toString().length);
 
  let newstr = str;
  let separator = '+';
  if (options.separator) separator = options.separator.toString()
   newstr = newstr + addition + separator; 

  if (options.repeatTimes) newstr = newstr.repeat(Number(options.repeatTimes));
  newstr = newstr.slice(0, -separator.length)
  return newstr;
}

module.exports = {
  repeater
};
