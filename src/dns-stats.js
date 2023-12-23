const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) return {};
  const arr = domains.map((item) => {
    const ap = item.split('.').reverse();
      return ap.map((_, i) => {
        const r = ap.slice();  
        return '.' + r.splice(0, i + 1).join('.');
      });
    });
    const arrflat =  arr.flat();
    const map = new Map()

    for (const dup of arrflat) {
      map.set(dup, map.get(dup) + 1 || 1)
    }
    return (Object.fromEntries(map));
}

module.exports = {
  getDNSStats
};
