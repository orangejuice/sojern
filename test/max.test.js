import {createMocks} from 'node-mocks-http';
import handle from '../pages/api/max';
import {describe, expect, test} from '@jest/globals';

const numbers = [35.4525, 2465.34, 253.42, 5, 425.5, 234, 57426, 4265, 523, 2593]

describe('/api/max', () => {
  test('return max result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      query: {
        numbers,
        q: 10,
      },
    });

    await handle(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: 57426,
      }),
    );
  });
});
