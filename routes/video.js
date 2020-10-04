const express = require("express");
const axios = require("axios");
const router = express.Router();
const videosController = require("../controllers/videosController");

router.route("/search/:q").get(
    async function (req, res) {
    let query = req.params.q;
    let { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${process.env.API_KEY}`);
    res.json(data);
    }
)

// Matches with "/api/videos"
router.route("/")
  .get(videosController.findAll)
  .post(videosController.create);

// Matches with "/api/videos/:id"
router
  .route("/:id")
  .get(videosController.findById)
  .put(videosController.update)
  .delete(videosController.remove);

module.exports = router;
module.exports = router;