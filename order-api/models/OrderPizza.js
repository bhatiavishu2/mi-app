const mongoose = require("mongoose");
const schema = mongoose.Schema;

const orderedPizzaSchema = new schema({
  size: String,
  pizzaId: String,
  toppings: [String],
  quantity: Number,
  total: Number
});

const OrderSchema = new schema({
  orderBy: String,
  name: String,
  phone: String,
  address: String,
  orderedPizza: [orderedPizzaSchema],
  subtotal: Number,
  tax: Number,
  total: Number,
  createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model("OrderPizza", OrderSchema);
