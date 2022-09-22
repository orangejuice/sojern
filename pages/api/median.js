const median = (numbers, quantifier) => {
  numbers.sort((a, b) => a - b)
  if (quantifier % 2 === 0) return (numbers[quantifier / 2 - 1] + numbers[quantifier / 2]) / 2
  else return numbers[quantifier / 2 - 1]
}

export default function handler(req, res) {
  const {numbers, q} = req.query;
  res.status(200).json({result: median(numbers, q)})
}


