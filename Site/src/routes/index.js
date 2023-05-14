var express = require("express");
var router = express.Router();

router.get("../../public/nextpoint-site/", function (req, res) {
    res.render("index", { title: "Express" });
});

module.exports = router;