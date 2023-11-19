var router = require('express').Router();

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Naslov'
    });
  });

module.exports = router