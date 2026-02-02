const router = require("express").Router();
const c = require("../controllers/menu.controller");

// GET
router.get("/", c.getMenu);
router.get("/search", c.searchMenu);
router.get("/:id", c.getMenuById);

// POST
router.post("/", c.createMenu);

// PUT
router.put("/:id", c.updateMenu);

// DELETE
router.delete("/:id", c.deleteMenu);

// PATCH
router.patch("/:id/availability", c.toggleAvailability);

module.exports = router;
