const express = require('express');
const product = require('./controllers/product.controller');
const cart = require('./controllers/cart.controller');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/Media', express.static('Media'));

app.get('/', (req, res) => {
  res.redirect('/products');
})
app.use('/products', product);
app.use('/cart', cart);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})