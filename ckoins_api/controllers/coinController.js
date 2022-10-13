const needle = require('needle');
const url = require('url');

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/';

exports.list = async (req, res, next) => {
  try {
    const apiRes = await needle(`${BASE_URL}list?include_platform=false`);
    const coinListData = await apiRes.body;
    return res.status(200).json({ coinListData });
  } catch (err) {
    res.status(404).json({ err });
  }
};
