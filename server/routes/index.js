var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.send({ title: 'Flash cards' });
});

module.exports = router;
