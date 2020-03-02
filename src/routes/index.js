var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const path = require('path');
const Usuario  = require('../models/index').Usuario
/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/usuario', async (req, res) => {
  await Usuario.create({
    email: "joao@joao.com",
    password_hash: "123123"
  }).then(data => {
    console.log(data);
    res.json(data);
  }).catch(err => {
    console.log(err);
  })
})

//static files
router.use("/static", express.static(path.join(__dirname, '../public')));

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  next(createError(404));
});

module.exports = router;
