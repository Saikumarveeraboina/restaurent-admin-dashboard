const Order = require("../models/Order");

exports.getTopSellers = async (req, res) => {
  const result = await Order.aggregate([
    { $unwind: "$items" },
    {
      $group: {
        _id: "$items.menuItem",
        totalSold: { $sum: "$items.quantity" },
      },
    },
    {
      $lookup: {
        from: "menuitems",
        localField: "_id",
        foreignField: "_id",
        as: "menuItem",
      },
    },
    { $unwind: "$menuItem" },
    { $sort: { totalSold: -1 } },
    { $limit: 5 },
  ]);

  res.json(result);
};
