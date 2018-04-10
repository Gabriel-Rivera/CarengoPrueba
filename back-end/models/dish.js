const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const DishSchema = new Schema({
  title: {
    type: String
    },
  image: String,
  description: {
    type: String
    },
  price: {
     type: Number
  }
});
module.exports = mongoose.model('dish', DishSchema);
