import axios from 'axios';

const getRecommendations = async (userId) => {
  try {
    const response = await axios.post(
      `${process.env.ML_SERVICE_URL}/recommend`,
      { user_id: userId },
      { timeout: 5000 }
    );

    return response.data.recommendations;
  } catch (error) {
    console.error('ML Service Error:', error);
    // Fallback to simple recommendations
    return getFallbackRecommendations(userId);
  }
};

// Example Express route
router.get('/recommendations/:userId', async (req, res) => {
  const recommendations = await getRecommendations(req.params.userId);
  res.json(recommendations);
});