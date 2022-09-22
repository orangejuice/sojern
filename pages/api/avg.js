/**
 * Calculate the average of numbers
 *
 * @param numbers Array
 * @param quantifier how many numbers
 */
const avg = (numbers, quantifier) => {
  return Number((numbers.reduce((a, b) => a + b, 0) / quantifier).toFixed(2))
}

export default function handler(req, res) {
  const {numbers, q} = req.query;
  res.status(200).json({result: avg(numbers, q)})
}


