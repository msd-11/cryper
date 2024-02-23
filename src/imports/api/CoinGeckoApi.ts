import Coin from './Coin';

class CoinGeckoApi {
  private static url: string = 'https://api.coingecko.com/api';

  public static async getCoinsMarkets(
    currency: string,
    page: number
  ): Promise<Coin[]> {
    const res = await fetch(
      `${this.url}/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=${page}&sparkline=false&locale=en`
    );
    const json = await res.json();

    return json.map(
      (c: any) => new Coin(c.symbol, c.name, c.current_price, c.image)
    );
  }

  public static async getTopCoins(currency: string): Promise<Coin[]> {
    let topCoins = await this.getCoinsMarkets(currency, 1);
    topCoins = topCoins.concat(await this.getCoinsMarkets(currency, 2));

    return topCoins;
  }
}

export default CoinGeckoApi;
