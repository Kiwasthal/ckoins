const needle = require('needle');

const BASE_URL = 'https://api.coingecko.com/api/v3/';

exports.list = async (req, res, next) => {
  try {
    const apiRes = await needle(`${BASE_URL}coins/list?include_platform=false`);
    const result = await apiRes.body;
    const coinList = await result.map(coin => ({
      name: coin.name,
      id: coin.id,
    }));
    return res.status(200).json({ coinList });
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.trending = async (req, res, next) => {
  try {
    const apiRes = await needle(`${BASE_URL}search/trending`);
    const { coins } = await apiRes.body;
    const result = await coins.map(coin => ({
      name: coin.item.name,
      id: coin.item.id,
      image: coin.item.large,
      price_btc: coin.item.price_btc,
    }));
    const trendingList = result.slice(0, 5);

    return res.status(200).json({ trendingList });
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.pagination = async (req, res, next) => {
  try {
    const apiRes = await needle(
      `${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${req.params.pageSize}&page=${req.params.currentPage}&sparkline=false`
    );
    const result = await apiRes.body;
    const paginationList = await result.map(coin => ({
      id: coin.id,
      image: coin.image,
      name: coin.name,
      cur_price: coin.current_price,
      high_24: coin.high_24h,
      low_24: coin.low_24h,
      market_cap_24h: coin.market_cap_change_percentage_24h,
    }));
    return res.status(200).json({ paginationList });
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.chart = async (req, res, next) => {
  try {
    const apiRes = await needle(
      `${BASE_URL}coins/${req.params.id}/market_chart?vs_currency=usd&days=${req.params.timespan}`
    );
    const result = await apiRes.body;
    return res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.coin = async (req, res, next) => {
  try {
    const apiRes = await needle(
      `${BASE_URL}coins/${req.params.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    const result = await apiRes.body;

    const detailedCoin = {
      id: result.id,
      name: result.name,
      image: result.image.large,
      description: result.description.en,
      current_price: result.market_data.current_price.usd,
      high_24h: result.market_data.high_24h.usd,
      low_24h: result.market_data.low_24h.usd,
      price_change_24h_in_currency:
        result.market_data.price_change_24h_in_currency.usd,
      price_change_percentage_7d_in_currency:
        result.market_data.price_change_percentage_7d_in_currency.usd,
      price_change_percentage_14d_in_currency:
        result.market_data.price_change_percentage_14d_in_currency.usd,
      price_change_percentage_30d_in_currency:
        result.market_data.price_change_percentage_30d_in_currency.usd,
      price_change_percentage_60d_in_currency:
        result.market_data.price_change_percentage_60d_in_currency.usd,
      price_change_percentage_200d_in_currency:
        result.market_data.price_change_percentage_200d_in_currency.usd,
      price_change_percentage_1y_in_currency:
        result.market_data.price_change_percentage_1y_in_currency.usd,
    };
    return res.status(200).json({ detailedCoin });
  } catch (err) {
    res.status(404).json({ err });
  }
};
