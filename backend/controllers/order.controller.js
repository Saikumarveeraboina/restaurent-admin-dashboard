const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  const { page = 1, limit = 5, status } = req.query;
  const filter = status ? { status } : {};

  const orders = await Order.find(filter)
    .populate("items.menuItem")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  res.json(orders);
};
exports.getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "items.menuItem"
  );
  res.json(order);
};

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(order);
};
