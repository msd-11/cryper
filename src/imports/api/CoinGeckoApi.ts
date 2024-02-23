import Coin from './Coin';

class CoinGeckoApi {
  private static url: string = 'https://api.coingecko.com/api';
  private static cache: Coin[] | null = null;

  public static async getCoinsMarkets(page: number): Promise<Coin[]> {
    const res = await fetch(
      `${this.url}/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=${page}&sparkline=false&locale=en`
    );
    const json = await res.json();

    return json.map(
      (c: any) => new Coin(c.symbol, c.name, c.current_price, c.image)
    );
  }

  public static async getTopCoins(): Promise<Coin[]> {
    if (this.cache == null) {
      let topCoins = await this.getCoinsMarkets(1);
      topCoins = topCoins.concat(await this.getCoinsMarkets(2));

      for (let i = topCoins.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [topCoins[i], topCoins[j]] = [topCoins[j], topCoins[i]];
      }

      this.cache = topCoins;
    }

    return this.cache;
  }

  public static async getRandom(): Promise<Coin> {
    if (this.cache == null) {
      await this.getTopCoins();
    }

    return this.cache!.pop()!;
  }
}

export default CoinGeckoApi;
