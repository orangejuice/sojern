import {createMocks} from 'node-mocks-http'
import handle from '../pages/api/math'
import {describe, expect, test} from '@jest/globals'

const numbers = [35.4525, 2465.34, 253.42, 5, 425.5, 234, 57426, 4265, 523, 2593]

describe('/api/math', () => {
  test('return minimum result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      body: JSON.stringify({func: 'min', numbers, quantifier: 10})
    })

    await handle(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: 5,
      }),
    )
  })

  test('return maximum result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      body: JSON.stringify({func: 'max', numbers, quantifier: 10})
    })

    await handle(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: 57426,
      }),
    )
  })
  test('return average result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      body: JSON.stringify({func: 'avg', numbers, quantifier: 10})
    })

    await handle(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: 6822.57,
      }),
    )
  })
  test('return median result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      body: JSON.stringify({func: 'median', numbers, quantifier: 10})
    })

    await handle(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: 474.25,
      }),
    )
  })
  test('return percentile result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      body: JSON.stringify({func: 'percentile', numbers, quantifier: 80})
    })

    await handle(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: 2593
      }),
    )
  })
})
