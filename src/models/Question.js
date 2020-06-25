const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var questionSchema = new Schema({
  question: { type: String },
  option1: { type: String },
  option2: { type: String },
  option3: { type: String },
  option4: { type: String },
  qno: { type: Number, unique: true },
  answer: { type: Number },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
