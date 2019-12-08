const Mongoose = require("mongoose");

const PizzaSchema = new Mongoose.Schema({
  title: { type: String },
  discription: { type: String },
  type: { type: String },
  created_by: { type: String },
  rupee: { type: Number, default: 0 }
});

module.exports = Mongoose.model("pizza-order", PizzaSchema);
