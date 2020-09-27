const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogpost.model");
const middleware = require("../middleware");

router.route("/Add").post(middleware.checkToken, (req, res) => {
  const blogpost = BlogPost({
    username: req.decoded.username,
    title: req.body.title,
    body: req.body.body,
  });
  blogpost.save().then((result) => {
    res.json({ data: result }).cathch((err) => {
      console.log(err), res.json({ err: err });
    });
  });
});

module.exports = router;
