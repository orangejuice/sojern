import {createMocks} from 'node-mocks-http';
import handle from '../pages/api/version';
import {describe, expect, test} from '@jest/globals';


describe('/api/version', () => {
  test('return version comparison result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      query: {
        v1: '0.1',
        v2: '1.1',
      },
    });

    await handle(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: -1,
      }),
    );
  });
});
