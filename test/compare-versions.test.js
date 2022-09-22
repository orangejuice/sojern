import {createMocks} from 'node-mocks-http';
import handleComparison from '../pages/api/comare-versions';
import {describe, expect, test} from '@jest/globals';


describe('/api/compare-versions', () => {
  test('return version comparison result', async () => {
    const {req, res} = createMocks({
      method: 'GET',
      query: {
        v1: '0.1',
        v2: '1.1',
      },
    });

    await handleComparison(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        result: -1,
      }),
    );
  });
});
