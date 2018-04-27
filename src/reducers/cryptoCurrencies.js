import { ADD_CRYPTOCURRENCIES, UPDATE_CRYPTOCURRENCY } from '../actions';

const initialState = {
    currencies:
        [
            {
                "id": "bitcoin",
                "name": "Bitcoin",
                "symbol": "BTC",
                "rank": "1",
                "price_usd": "9224.42",
                "price_btc": "1.0",
                "24h_volume_usd": "8287460000.0",
                "market_cap_usd": "156827011829",
                "available_supply": "17001287.0",
                "total_supply": "17001287.0",
                "max_supply": "21000000.0",
                "percent_change_1h": "-0.23",
                "percent_change_24h": "4.27",
                "percent_change_7d": "10.21",
                "last_updated": "1524814775"
            },
            {
                "id": "ethereum",
                "name": "Ethereum",
                "symbol": "ETH",
                "rank": "2",
                "price_usd": "654.969",
                "price_btc": "0.0710651",
                "24h_volume_usd": "2631280000.0",
                "market_cap_usd": "64891329887.0",
                "available_supply": "99075422.0",
                "total_supply": "99075422.0",
                "max_supply": null,
                "percent_change_1h": "-0.29",
                "percent_change_24h": "4.19",
                "percent_change_7d": "13.7",
                "last_updated": "1524814760"
            },
            {
                "id": "ripple",
                "name": "Ripple",
                "symbol": "XRP",
                "rank": "3",
                "price_usd": "0.840003",
                "price_btc": "0.00009114",
                "24h_volume_usd": "836628000.0",
                "market_cap_usd": "32882928293.0",
                "available_supply": "39146203398.0",
                "total_supply": "99992334929.0",
                "max_supply": "100000000000",
                "percent_change_1h": "-0.33",
                "percent_change_24h": "4.26",
                "percent_change_7d": "-1.41",
                "last_updated": "1524814741"
            },
            {
                "id": "bitcoin-cash",
                "name": "Bitcoin Cash",
                "symbol": "BCH",
                "rank": "4",
                "price_usd": "1383.82",
                "price_btc": "0.150146",
                "24h_volume_usd": "1041790000.0",
                "market_cap_usd": "23657907804.0",
                "available_supply": "17096088.0",
                "total_supply": "17096088.0",
                "max_supply": "21000000.0",
                "percent_change_1h": "-0.43",
                "percent_change_24h": "3.88",
                "percent_change_7d": "38.49",
                "last_updated": "1524814756"
            },
            {
                "id": "eos",
                "name": "EOS",
                "symbol": "EOS",
                "rank": "5",
                "price_usd": "15.0036",
                "price_btc": "0.00162792",
                "24h_volume_usd": "1252010000.0",
                "market_cap_usd": "12286796625.0",
                "available_supply": "818923233.0",
                "total_supply": "900000000.0",
                "max_supply": "1000000000.0",
                "percent_change_1h": "-1.4",
                "percent_change_24h": "1.0",
                "percent_change_7d": "50.88",
                "last_updated": "1524814754"
            },
            {
                "id": "litecoin",
                "name": "Litecoin",
                "symbol": "LTC",
                "rank": "6",
                "price_usd": "149.402",
                "price_btc": "0.0162103",
                "24h_volume_usd": "400403000.0",
                "market_cap_usd": "8406695570.0",
                "available_supply": "56268963.0",
                "total_supply": "56268963.0",
                "max_supply": "84000000.0",
                "percent_change_1h": "-0.65",
                "percent_change_24h": "2.9",
                "percent_change_7d": "1.21",
                "last_updated": "1524814743"
            },
            {
                "id": "stellar",
                "name": "Stellar",
                "symbol": "XLM",
                "rank": "7",
                "price_usd": "0.414642",
                "price_btc": "0.00004499",
                "24h_volume_usd": "194588000.0",
                "market_cap_usd": "7700213364.0",
                "available_supply": "18570751068.0",
                "total_supply": "103887050716",
                "max_supply": null,
                "percent_change_1h": "-1.63",
                "percent_change_24h": "10.83",
                "percent_change_7d": "11.06",
                "last_updated": "1524814756"
            },
            {
                "id": "cardano",
                "name": "Cardano",
                "symbol": "ADA",
                "rank": "8",
                "price_usd": "0.291075",
                "price_btc": "0.00003158",
                "24h_volume_usd": "172497000.0",
                "market_cap_usd": "7546722057.0",
                "available_supply": "25927070538.0",
                "total_supply": "31112483745.0",
                "max_supply": "45000000000.0",
                "percent_change_1h": "-0.12",
                "percent_change_24h": "5.5",
                "percent_change_7d": "3.74",
                "last_updated": "1524814758"
            },
            {
                "id": "iota",
                "name": "IOTA",
                "symbol": "MIOTA",
                "rank": "9",
                "price_usd": "2.02062",
                "price_btc": "0.00021924",
                "24h_volume_usd": "74598600.0",
                "market_cap_usd": "5616374480.0",
                "available_supply": "2779530283.0",
                "total_supply": "2779530283.0",
                "max_supply": "2779530283.0",
                "percent_change_1h": "-0.05",
                "percent_change_24h": "10.84",
                "percent_change_7d": "10.74",
                "last_updated": "1524814754"
            },
            {
                "id": "neo",
                "name": "NEO",
                "symbol": "NEO",
                "rank": "10",
                "price_usd": "75.4347",
                "price_btc": "0.00818478",
                "24h_volume_usd": "145949000.0",
                "market_cap_usd": "4903255500.0",
                "available_supply": "65000000.0",
                "total_supply": "100000000.0",
                "max_supply": "100000000.0",
                "percent_change_1h": "-0.32",
                "percent_change_24h": "4.69",
                "percent_change_7d": "1.22",
                "last_updated": "1524814750"
            }
        ]
}

const cryptoCurrencies = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CRYPTOCURRENCIES:
            return {
                ...state,
                cryptoCurrencies: [...action.currencies],
            };
        case UPDATE_CRYPTOCURRENCY:
            return state.map(cryptoCurrency =>
                (cryptoCurrency.id === action.cryptoCurrency.id)
                    ? { ...action.cryptoCurrency }
                    : cryptoCurrency
            )
        default:
            return state;
    };
};

export default cryptoCurrencies;