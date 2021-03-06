import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    required: true,
    type: Number
  },
  body: {
    required: true,
    type: String
  }
});

const CommentModel = mongoose.model("Comment", schema);
export default CommentModel;
