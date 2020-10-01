const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//developmet routes
if (process.env.NODE_ENV === "development") {
  router.get("/", ensureGuest, (req, res) => {
    res.redirect("http://localhost:3000/");
  });
  
  router.get("/dashboard", ensureAuth, async (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  });
}
router.get("/search", ensureAuth, async (req, res) => {
  res.redirect("http://localhost:3000/search");
});

module.exports = router;
