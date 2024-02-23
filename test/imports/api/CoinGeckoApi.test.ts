import { describe, expect, test } from '@jest/globals';
import CoinGeckoApi from '../../../src/imports/api/CoinGeckoApi';
import Coin from '../../../src/imports/api/Coin';

describe('CoinGeckoApi', () => {
  test('getCoinsMarkets', async () => {
    const coins = await CoinGeckoApi.getCoinsMarkets(1);

    expect(coins.length).toBe(250);
  });

  test('getTopCoins', async () => {
    const coins = await CoinGeckoApi.getTopCoins();

    expect(coins.length).toBe(500);
  });

  test('getRandom', async () => {
    const coin = await CoinGeckoApi.getRandom();

    expect(coin.constructor.name).toBe(Coin.name);
  });
});
