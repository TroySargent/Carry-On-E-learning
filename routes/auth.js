const express = require("express");
const passport = require("passport");
const router = express.Router();

// Auth with google
//route get /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// google auth callback
// get /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    //res.redirect("http://localhost:3000/saved");
    res.redirect("/search");
  }
);

// Logout user
//  /auth/google/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
