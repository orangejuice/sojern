import {describe, expect, test} from "@jest/globals"
import {createMocks} from "node-mocks-http"
import pingHandle from "../pages/api/ping"
import * as fs from "fs"

const filename = '/tmp/ok'

describe('/api/ping', () => {
  beforeEach(() => {
    console.log('Required file checking')

    try {
      fs.appendFileSync(filename, '')
    } catch (err) {
      if (err) fail('Test failed, unable to create required file, Error ' + err)
    }
    console.log('Required file exists')
  })

  test('required file exists', async () => {
    console.log('start')
    const {req, res} = createMocks({method: 'GET'})

    await pingHandle(req, res)

    console.log(res._getStatusCode(), res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(res._getData()).toEqual('ok')
  })

  test('required file does not exist', async () => {
    const {req, res} = createMocks({method: 'GET'})

    fs.rm(filename, async () => {

      await pingHandle(req, res)

      expect(res._getStatusCode()).toBe(503)
      expect(res._getData()).toEqual('Service unavailable.')
    })
  })
})
