const validateOrder = (req, res, next) => {
  const { items, totalAmount } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: "Order must contain at least one item",
    });
  }

  if (typeof totalAmount !== "number" || totalAmount <= 0) {
    return res.status(400).json({
      message: "Total amount must be greater than zero",
    });
  }

  next();
};

module.exports = validateOrder;
