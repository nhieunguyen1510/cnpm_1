const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const tiviService = require('./services/tivi.service');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/Media', express.static('Media'));

app.get('/', (req, res) => {
  const tiviName = req.query['tivi-name'];
  const tiviGroupName = req.query['tivi-group-name'];
  tiviService.findAll({
    tiviName,
    tiviGroupName,
  }).then(tivis => {
    res.render('index', {
      tivis,
      tiviName,
      tiviGroupName,
    });
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})