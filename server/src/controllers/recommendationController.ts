import { Request, Response } from 'express';
import { getRecommendations } from '../services/mlService';
import { Recommendation } from '../types/recommendation';

export const getUserRecommendations = async (
  req: Request,
  res: Response<Recommendation[] | { error: string }>
) => {
  try {
    const userId = req.params.userId;
    const recommendations = await getRecommendations(userId);
    res.json(recommendations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};