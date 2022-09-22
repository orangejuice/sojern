const min = (numbers, quantifier) => {
  return Math.min(...numbers)
}

export default function handler(req, res) {
  const {numbers, q} = req.query;
  res.status(200).json({result: min(numbers, q)})
}


