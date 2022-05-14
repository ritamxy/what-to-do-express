const express = require("express");
const router = express.Router();
const post = require("../models/post.model");
const m = require("../helpers/middlewares");

/* Get all todo items */
//Example GET (Get all todo items)
router.get("/", async (req, res) => {
  await post
    .getPosts()
    .then((posts) => res.json(posts))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

/* Get todo item by id */
// Task: Create the endpoint to return a selected todo item.
router.get("/:id", m.mustBeInteger, async (req, res) => {});

/* Insert a new todo item */
// Task: Create the endpoint to store a new todo item locally on the server.
router.post("/", m.checkFieldsPost, async (req, res) => {
  await post
    .insertPost(req.body)
    .then(() => res.json({ message: "Todo Saved!" }))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

/* Update selected todo item */
// Task: Create the endpoint to update one todo item locally on the server.
router.put("/:id", m.mustBeInteger, m.checkFieldsPost, async (req, res) => {});

/* Delete selected todo item */
// Task: Create the endpoint to remove one todo item locally on the server.
router.delete("/:id", m.mustBeInteger, async (req, res) => {
  await post
    .deletePost(Number(req.params.id))
    .then(() => res.json({ message: "Todo Deleted!" }))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

// Routes
module.exports = router;
