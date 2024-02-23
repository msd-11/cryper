class Coin {
    symbol: string;
    name: string;
    price: number;
    imageUrl: string;

    constructor(
        _symbol: string,
        _name: string,
        _price: number,
        _imageUrl: string,
    ) {
        this.symbol = _symbol;
        this.name = _name;
        this.price = _price;
        this.imageUrl = _imageUrl;
    }
}

export default Coin;
