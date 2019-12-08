const {
  makeExecutableSchema,
  addMockFunctionsToSchema
} = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
    type Pizza {
            name: String
            description: String
            price: Int
            toppings: [String]
            type: String
    }

    type Query{
        pizzaList: [Pizza]
        pizza(description:String): [Pizza]
    }
    type Mutation{
        addPizza(name:String, description:String, price:Int, toppings:[String], type: String) : Pizza
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
