import { expect, test } from '@jest/globals';
import CoinGeckoApi from '../../../src/imports/api/CoinGeckoApi';

test('getTopCoins', async () => {
  const coins = await CoinGeckoApi.getTopCoins('eur');

  expect(coins.length).toBe(500);
});
