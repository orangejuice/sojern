/**
 * Compare two version numbers
 *
 * If version1 > version2 return 1
 * If version1 < version2 return -1
 * otherwise return 0
 *
 * @param {string} v1 version1
 * @param {string} v2 version2
 *
 */
const compareVersions = (v1, v2) => {
  if (v1 === v2) return 0

  let v1parsed = v1.toString().split('.')
  let v2parsed = v2.toString().split('.')

  for (let i = 0; i < v1parsed.length; i++) {
    const v = v1parsed[i];
    if (i <= v2parsed.length - 1)
      if (v < v2parsed.at(i)) return -1;
      else if (v > v2parsed.at(i)) return 1;
  }
  if (v1parsed.length > v2parsed.length) return 1; else return -1
}

export default function handler(req, res) {
  const {v1, v2} = req.query;
  res.status(200).json({result: compareVersions(v1, v2)})
}
