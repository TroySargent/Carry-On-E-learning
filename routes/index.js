const path = require("path");
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
} else {
  
  // Handles any requests that don't match the ones above
  router.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,'/client/build/index.html'));
  });

}

module.exports = router;
