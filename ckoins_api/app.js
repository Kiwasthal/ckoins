const express = require('express');
const app = express();
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const apiRouter = require('./routes/api');

const port = 3000;
const corsDomains = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://cyperscope-assignment-2qlivhxoh-kiwasthal.vercel.app',
];

const corsOptions = {
  origin: corsDomains,
  optionSuccessStatus: 200,
};

// app.use(helmet());
// app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options('*', cors(corsOptions));

app.use('/api', cors(corsOptions), apiRouter);

app.listen(port, () => {
  console.log(`CoinGecko app listening on port ${port}`);
});
