const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members !== 'object'  ||  members === null || !Array.isArray(members)) return false;
  const arr = members.map(item => typeof item === 'string' ? item.toUpperCase().trim()[0] : undefined);
  return arr.filter(i => i !== undefined).sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
}

module.exports = {
  createDreamTeam
};
