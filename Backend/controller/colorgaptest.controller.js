const ColorgapTest = require('../model/colorgaptest.model');

const saveColorgapResult = async (req, res) => {
  try {
    const {
      correct,
      total,
      percentage,
      result
    } = req.body;

    const newResult = new ColorgapTest({
      testType: "ColorGapTest",
      correct,
      total,
      percentage,
      result,
      timestamp: new Date()
    });

    await newResult.save();
    res.status(201).json({ message: "Result saved successfully" });
  } catch (err) {
    console.error("Error saving result:", err);
    res.status(500).json({ message: "Error saving result", error: err });
  }
};

module.exports = { saveColorgapResult };
