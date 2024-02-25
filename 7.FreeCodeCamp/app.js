require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require('mongoose');
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require('./src/configs');

app.set('trust proxy', 1);
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(helmet());
app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     // store: redisStore,
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     cookie: { httpOnly: true, maxAge: 60 * 60 * 1000 },
//   })
// );
app.use('/', require('./src/routes'));

console.log(process.env.MONGO_USER);
console.log(process.env.MONGO_PASSWORD);
console.log(process.env.MONGO_IP);
console.log(process.env.MONGO_PORT);

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => console.log('Connect db successfully'))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3000, () =>
  console.log(`App listening in port ${process.env.PORT}`)
);
