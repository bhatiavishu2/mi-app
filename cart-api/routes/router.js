const express = require("express"),
  router = express.Router(),
  PizzaModel = require("../models/PizzaModel");

// Register
router.post("/add", function(req, res) {
  create(req.body, function(err, resData) {
    if (err) {
      res.status(403).send({ msg: "there is some issue to add to cart" });
    } else {
      res.json(resData);
    }
  });
});

router.get("/saved/:pizzaId", function(req, res) {
  findById(req.params.pizzaId, function(err, resData) {
    if (err) {
      res.status(403).send({ msg: "we didnt get any thing for this user" });
    } else {
      res.json(resData);
    }
  });
});

router.delete("/remove/:pizzaId", function(req, res) {
  removeByid(req.params.pizzaId, function(err, resData) {
    if (err) {
      res.status(403).send({ msg: "there is some issue to remove from cart" });
    } else {
      res.json(resData);
    }
  });
});

router.put("/update/:pizzaId", function(req, res) {
  updatePizza(req.params.pizzaId, req.body, function(err, resData) {
    if (err) {
      res.status(403).send({ msg: "there is some issue to remove from cart" });
    } else {
      res.json(resData);
    }
  });
});

function create(data, callback) {
  const newPizza = new PizzaModel(data);
  newPizza.save(callback);
}
function findById(id, callback) {
  PizzaModel.findById(id, callback);
}
function removeById(id, callback) {
  PizzaModel.removeById(id, callback);
}
function updatePizza(id, data, callback) {
  const newPizza = new PizzaModel(data);
  newPizza.id = id;
  newPizza.save(callback);
}

module.exports = router;
