const dotenv = require('dotenv');
const express = require('express');
const app = express();

const http = require('http');
const path = require('path');

const router = require('./routes/index');

//dotenv.load();
dotenv.config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const config = {
  //authRequired: false,
  //auth0Logout: true
};

const port = process.env.PORT || 3000;
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}

//app.use(auth(config));

// Middleware to make the `user` object available for all views
/*
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});
*/

app.use('/', router);

http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
    console.log(process.env.NODE_ENV);
  });