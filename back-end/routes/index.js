var express = require('express');
var router = express.Router();
const Dish = require('../models/dish');


/* GET home page. */
router.get('/', (req, res, next) => {
  Dish.find({}, (err, dishes) => {
    if (err) { return res.json(err).status(500); }

    return res.json(dishes);
  });
});

module.exports = router;
