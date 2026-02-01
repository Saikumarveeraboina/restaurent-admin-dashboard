const MenuItem = require("../models/MenuItem");

exports.getMenu = async (req, res) => {
  const { category, isAvailable, minPrice, maxPrice } = req.query;

  let filter = {};
  if (category) filter.category = category;
  if (isAvailable) filter.isAvailable = isAvailable === "true";
  if (minPrice || maxPrice) {
    filter.price = {
      ...(minPrice && { $gte: minPrice }),
      ...(maxPrice && { $lte: maxPrice }),
    };
  }

  const items = await MenuItem.find(filter);
  res.json(items);
};

exports.searchMenu = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);

  const items = await MenuItem.find({ $text: { $search: q } });
  res.json(items);
};

exports.getMenuById = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Menu item not found" });
  res.json(item);
};

exports.createMenu = async (req, res) => {
  const item = await MenuItem.create(req.body);
  res.status(201).json(item);
};

exports.updateMenu = async (req, res) => {
  const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};

exports.deleteMenu = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Menu item deleted" });
};

exports.toggleAvailability = async (req, res) => {
  const item = await MenuItem.findById(req.params.id);
  item.isAvailable = !item.isAvailable;
  await item.save();
  res.json(item);
};
