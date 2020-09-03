const express = require('express');
const router = express.Router();
const tiviService = require('../services/tivi.service');

router.get('/', (req, res) => {
  const tiviName = req.query['tivi-name'];
  const tiviGroupName = req.query['tivi-group-name'];
  tiviService.findAll({
    tiviName,
    tiviGroupName,
  }).then(tivis => {
    res.render('index', {
      url: req.originalUrl,
      tivis,
      tiviName,
      tiviGroupName,
    });
  });
})

module.exports = router;
