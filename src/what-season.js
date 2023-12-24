const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const isValidDate = (d) => {
  if (!(d instanceof Date)) {
    return false;
  }
  return !isNaN(d.getTime());
}
function getSeason(date) {
  if (!isValidDate(new Date(date))) return 'Invalid date!';
  const onDate = new Date(date);
  const winter = [1, 2, 12];
  const spring = [3, 4, 5];
  const summer = [6, 7, 8];
  const autumn = [9, 10, 11];
 
  if (winter.indexOf(onDate.getMonth() + 1) >=0)  return 'winter'; 
  if (spring.indexOf(onDate.getMonth() + 1) >=0)  return 'spring'; 
  if (summer.indexOf(onDate.getMonth() + 1) >=0)  return 'summer'; 
  if (autumn.indexOf(onDate.getMonth() + 1) >=0)  return 'autumn'; 
}

module.exports = {
  getSeason
};
