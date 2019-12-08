const mongoose = require("mongoose");
const Pizzamodel = require("./models/Pizza");

const resolvers = {
  Query: {
    pizzaList: () => {
      return Pizzamodel.find({});
    },

    pizza: (root, args) => {
      const filterPropertyValue = args.description;
      return Pizzamodel.find({ description: { $regex: filterPropertyValue } });
    }
  },

  Mutation: {
    addPizza: (root, { name, description, price, toppings, type }, req) => {
      const newPizza = {
        name: name,
        description: description,
        price: price,
        toppings: toppings,
        type: type
      };
      if(!req.adminName){
        throw new Error("Unauthorize access");
      }
      return new Pizzamodel(newPizza).save();
    }
  }
};

module.exports = resolvers;
