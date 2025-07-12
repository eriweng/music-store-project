// albums' data router is here
const express = require("express");
const router = express.Router();
const albums = require("../data/albums.json");

router.get("/", (req, res) => {
  res.json(albums);
});

router.get("/:id", (req, res) => {
  const albumId = parseInt(req.params.id, 10);
  if (isNaN(albumId)) {
    return res.status(400).json({ error: "Invalid album ID" });
  }
  const album = albums.find((a) => a.id === albumId);

  if (!album) {
    return res.status(404).json({ error: "Album not found" });
  }

  res.json(album);
});


module.exports = router;
