const router = require("express").Router();
const c = require("../controllers/menu.controller");
const validateMenu = require("../validators/menu.validator");

router.post("/", validateMenu, c.createMenu);
router.put("/:id", validateMenu, c.updateMenu);


router.get("/", c.getMenu);
router.get("/search", c.searchMenu);
router.get("/:id", c.getMenuById);
router.post("/", c.createMenu);
router.put("/:id", c.updateMenu);
router.delete("/:id", c.deleteMenu);
router.patch("/:id/availability", c.toggleAvailability);

module.exports = router;
