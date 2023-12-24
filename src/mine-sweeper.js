const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const isExist = (i, j, iMax, jMax)  => {
  return (i >= 0 && i < iMax && j >=0 && j < jMax);
} 
function minesweeper(matrix) {
  let res = [];
   let p = [];
   const arr = matrix.map(item => item.map(i => i ? 1 : 0));
   for(let i = 0; i < arr.length; i++) { 
    p = [];
     for (let j = 0; j < arr[i].length; j++) {
       let count = 0;
       const iMax = arr.length;
       const jMax = arr[i].length;
       if (isExist(i - 1, j - 1, iMax, jMax))  count = count + arr[i - 1][j - 1]; 
       if (isExist(i - 1, j, iMax, jMax))  count = count +  arr[i - 1][j]; 
       if (isExist(i - 1, j + 1, iMax, jMax))  count = count + arr[i - 1][j + 1]; 
       if (isExist(i, j + 1, iMax, jMax))   count = count +  arr[i][j + 1] ;  
       if (isExist(i + 1, j + 1, iMax, jMax))  count = count +  arr[i + 1][j + 1]; 
       if (isExist(i + 1, j, iMax, jMax))  count = count +  arr[i + 1][j]; 
       if (isExist(i + 1, j - 1, iMax, jMax))  count = count +  arr[i + 1][j - 1]; 
       if (isExist(i, j - 1, iMax, jMax))  count = count +  arr[i][j - 1]; 
       p[j] = count;
     } 
     res[i] = p;
   }
   return res;
}

module.exports = {
  minesweeper
};
