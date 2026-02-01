const router = require("express").Router();
const c = require("../controllers/analytics.controller");

router.get("/top-sellers", c.getTopSellers);

module.exports = router;
