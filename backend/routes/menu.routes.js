const router = require("express").Router();
const c = require("../controllers/menu.controller");

router.get("/", c.getMenu);
router.get("/search", c.searchMenu);
router.get("/:id", c.getMenuById);

router.post("/", c.createMenu);

router.put("/:id", c.updateMenu);

router.delete("/:id", c.deleteMenu);
router.patch("/:id/availability", c.toggleAvailability);

module.exports = router;
