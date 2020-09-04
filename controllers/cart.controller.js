const express = require('express');
const router = express.Router();
const tiviService = require('../services/tivi.service');

router.get('/', (req, res) => {
  const id = req.query.id;
  if (id) {
    res.render('cart', {
      url: req.originalUrl,
      tivi: null,
    });
  } else {
    tiviService.find({
      id
    }).then(tivi => {
      res.render('cart', {
        url: req.originalUrl,
        tivi,
      });
    });
  }
})

module.exports = router;
