// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import percentile from "percentile"

export default function handler(req, res) {
  let request = {}, response = {statusCode: 200}
  let numbers = [], quantifier = null

  try {
    request = JSON.parse(req.body)
    response.request = request.body
    quantifier = request['quantifier']
    numbers = request['numbers']
  } catch (e) {
    res.status(400).json({statusCode: 400, message: 'Invalid request.'})
    return
  }

  switch (request.func) {
    case 'min':
      response.message = 'calculated minimum value'
      response.result = min(numbers, quantifier)
      break
    case 'max':
      response.message = 'calculated maximum value'
      response.result = max(numbers, quantifier)
      break
    case 'avg':
      response.message = 'calculated average value'
      response.result = avg(numbers, quantifier)
      break
    case 'median':
      response.message = 'calculated median value'
      response.result = median(numbers, quantifier)
      break
    case 'percentile':
      response.message = 'calculated percentile value'
      const percentile = require("percentile")
      response.result = percentile(quantifier, numbers)
      break
    default:
      response.message = 'Not Implemented.'
      response.statusCode = 501
  }

  res.status(response.statusCode).json(response)
}

/**
 * Calculate the min of numbers
 *
 * @param numbers Array
 * @param quantifier how many numbers
 */
const min = (numbers, quantifier) => {
  return Math.min(...numbers)
}

/**
 * Calculate the max of numbers
 *
 * @param numbers Array
 * @param quantifier how many numbers
 */
const max = (numbers, quantifier) => {
  return Math.max(...numbers)
}
/**
 * Calculate the average of numbers
 *
 * @param numbers Array
 * @param quantifier how many numbers
 */
const avg = (numbers, quantifier) => {
  return Number((numbers.reduce((a, b) => a + b, 0) / quantifier).toFixed(2))
}

/**
 * Calculate the median of numbers
 *
 * @param numbers Array
 * @param quantifier how many numbers
 */
const median = (numbers, quantifier) => {
  numbers.sort((a, b) => a - b)
  if (quantifier % 2 === 0) return (numbers[quantifier / 2 - 1] + numbers[quantifier / 2]) / 2
  else return numbers[quantifier / 2 - 1]
}
