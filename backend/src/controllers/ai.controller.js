import aiService from "../services/ai.service.js";

export const getReview = async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({
        message: "Code is required",
      });
    }

    const review = await aiService(code, language);

    return res.status(200).send(review);
  } catch (error) {
    console.error("Controller Error:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
};