const validateMenuItem = (req, res, next) => {
  const { name, category, price } = req.body;

  if (!name || !category || price === undefined) {
    return res.status(400).json({
      message: "Name, category, and price are required",
    });
  }
  const allowedCategories = [
    "Appetizer",
    "Main Course",
    "Dessert",
    "Beverage",
  ];

  if (!allowedCategories.includes(category)) {
    return res.status(400).json({
      message: "Invalid category value",
    });
  }
  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({
      message: "Price must be a positive number",
    });
  }
  next();
};
module.exports = validateMenuItem;
