const express = require("express"),
  router = express.Router(),
  OrderModel = require("../models/OrderPizza");

// Register
router.post("/create", function(req, res) {
  if(req.adminName){
    return res.status(400).send({
      msg: "Admin can nnot place order"
    });
  }
  if(!req.userName){
    return res.status(400).send({
      msg: "Please login to place an order"
    });
  }
  var orderData = req.body;
  orderData.orderBy = req.username;
  createOrder(orderData, function(err, newData) {
    if (err) {
      res.status(202).send({
        msg: "Order processing not completed because of some technical issue"
      });
    }
    res.json(newData);
  });
});
router.get("/detail/:orderId", function(req, res) {
  getAll({ _id: req.params.orderId, orderBy: req.username }, function(
    err,
    newData
  ) {
    if (err) {
      res.status(202).send({
        msg: "Order processing not completed because of some technical issue"
      });
    }
    res.json(newData);
  });
});
router.get("/history", function(req, res) {
  getAll({ orderBy: req.username }, function(err, newData) {
    if (err) {
      res.status(202).send({
        msg: "Order processing not completed because of some technical issue"
      });
    }
    res.json(newData);
  });
});
router.get("/repeatorder/:orderId", function(req, res) {
  getAll({ _id: req.params.orderId, orderBy: req.username }, function(
    err,
    newData
  ) {
    if (err) {
      res.status(202).send({
        msg: "Order processing not completed because of some technical issue"
      });
    }
    res.json(newData);
  });
});

function createOrder(data, callback) {
  const newOrderModel = new OrderModel(data);
  newOrderModel.save(callback);
}
function getAll(data, callback) {
  OrderModel.find(data, callback);
}
function getOrderById(data, callback) {
  // because fetching data id and username both should have passed
  OrderModel.findById(data, callback);
}
module.exports = router;
