/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const output = [...arr];
  if (param === 'asc') {
    return output.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'}));
  }
  return output.sort((a, b) => b.localeCompare(a,  ['ru', 'en'],{caseFirst: 'upper'}));
}
