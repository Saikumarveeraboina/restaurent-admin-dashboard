const router = require("express").Router();
const c = require("../controllers/order.controller");
const validateOrder = require("../validators/order.validator");
router.post("/", validateOrder, c.createOrder);
router.get("/", c.getOrders);
router.get("/:id", c.getOrderById);
router.post("/", c.createOrder);
router.patch("/:id/status", c.updateOrderStatus);

module.exports = router;
