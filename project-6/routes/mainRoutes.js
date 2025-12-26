const express = require("express");
const { home, about, contact, echo } = require("../controllers/mainController");

const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.post("/echo", echo);

module.exports = router;
