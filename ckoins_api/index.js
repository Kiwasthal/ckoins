const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');

const port = 3000;
const devDomain = 'http://localhost:8080';

const corsOptions = {
  origin: [devDomain],
  optionSuccessStatus: 200,
};

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options('*', cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello Cyberscope');
});

app.listen(port, () => {
  console.log(`CoinGecko app listening on port ${port}`);
});
