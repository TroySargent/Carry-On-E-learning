const express = require("express");
const axios = require("axios");
const router = express.Router();

router.route("/search").get(
    async function (req, res) {
    let { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding%20dog&type=video&videoDefinition=high&key=${process.env.API_KEY}`);
    res.json(data);
    }
)

module.exports = router;