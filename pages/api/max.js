const max = (numbers, quantifier) => {
  return Math.max(...numbers)
}

export default function handler(req, res) {
  const {numbers, q} = req.query;
  res.status(200).json({result: max(numbers, q)})
}


