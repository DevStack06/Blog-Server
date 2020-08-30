const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = Schema({
  username: String,
  title: String,
  body: String,
  coverImage: {
    type: String,
    default: "",
  },
  like: Number,
  share: Number,
  comment: Number,
});

module.exports = mongoose.model("BlogPost", BlogPost);
