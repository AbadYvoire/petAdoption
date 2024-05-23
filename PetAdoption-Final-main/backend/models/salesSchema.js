const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salesDocument = new Schema({
  petType: { type: String, required: true },
  quantitySold: { type: Number, required: true },
  revenue: { type: Number, required: true },
  weekEnding: { type: Date, required: true }
});

const Sales = mongoose.model('Sales', salesDocument);
module.exports = Sales;
