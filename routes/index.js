const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const axios = require("axios");

//developmet routes
if (process.env.NODE_ENV === "development") {
  router.get("/", ensureGuest, (req, res) => {
    res.redirect("http://localhost:3000/");
  });
  
  router.get("/dashboard", ensureAuth, async (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  });
}


router.get("/videoSearch", ensureAuth, async (req, res) => {



axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding%20dog&type=video&videoDefinition=high&key=${process.env.API_KEY_YOUTUBE}`).then(({data}) =>{

  res.json(data);

})


  
})

module.exports = router;
