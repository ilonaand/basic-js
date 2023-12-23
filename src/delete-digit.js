const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [...''+n].map(Number);
   const num = arr.map((_, i) => { 
      const a = arr.slice(); a.splice(i, 1); return Number(a.join(''));
    });
  return Math.max(...num);
}

module.exports = {
  deleteDigit
};
