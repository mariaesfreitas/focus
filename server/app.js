require('dotenv').config();
const cors = require('cors');
const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3001;

const allowedOrigins = ['https://www.focusconjur.com.br', 'https://www.amfadvocacia.adv.br'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}));

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
