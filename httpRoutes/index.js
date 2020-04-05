const express = require('express');
const router = express.Router();
const articleController = require('controllers/article');

router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
