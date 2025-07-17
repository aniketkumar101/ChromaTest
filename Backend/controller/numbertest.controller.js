const NumberTest = require('../model/numbertest.model');

exports.saveNumberTest = async (req, res) => {
  try {
    const { correctAnswer, userAnswer } = req.body;

    const result = correctAnswer === userAnswer ? 'Correct' : 'Incorrect';

    const newTest = new NumberTest({
      correctAnswer,
      userAnswer,
      result
    });

    await newTest.save();
    res.status(201).json({ message: 'Result saved successfully', data: newTest });
  } catch (error) {
    console.error('Error saving Number Test:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
