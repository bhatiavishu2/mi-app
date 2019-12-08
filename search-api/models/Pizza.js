const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PizzaSchema = new schema({
  name: String,
  description: String,
  price: Number,
  toppings: [String],
  type: String
});

module.exports = mongoose.model("Pizza", PizzaSchema);
