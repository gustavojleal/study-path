import axios from 'axios';
import { Recommendation } from '../types/recommendation';

const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:5001';

export const getRecommendations = async (
  userId: string
): Promise<Recommendation[]> => {
  try {
    const response = await axios.post(`${ML_SERVICE_URL}/recommend`, { userId });
    return response.data.recommendations as Recommendation[];
  } catch (error) {
    console.error('ML Service Error:', error);
    throw new Error('Failed to get recommendations');
  }
};