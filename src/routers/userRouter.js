const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const { check, validationResult } = require("express-validator");

// @route   POST api/questions
// @desc    Post a question
// @access  Public
router.post(
  "/questions",
  [
    // add custom validations in middleware
    check("question", "Question is required").not().isEmpty(),
    check("answer", "Answer is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      // Grab errors from validation middleware
      const errors = validationResult(req);
      console.log("hey");
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const {
        question,
        answer,
        qno,
        option1,
        option2,
        option3,
        option4,
      } = req.body;
      const newQuestion = await new Question({
        question,
        answer,
        qno,
        option1,
        option2,
        option3,
        option4,
      });
      console.log("hey");
      await newQuestion.save();
      console.log("hey");

      // Send msg to client
      res.status(201).send({ msg: "Question has been posted" });
    } catch (e) {
      console.log(e);
      res.status(500).send({ errors: [{ msg: "Server Error" }] });
    }
  }
);

router.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find({});
    res.status(200).send({ questions });
  } catch (e) {
    res.status(500).send({ errors: [{ msg: "Server Error" }] });
  }
});
module.exports = router;
