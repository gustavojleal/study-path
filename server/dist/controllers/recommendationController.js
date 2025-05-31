"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRecommendations = void 0;
const mlService_1 = require("../services/mlService");
const getUserRecommendations = async (req, res) => {
    try {
        const userId = req.params.userId;
        const recommendations = await (0, mlService_1.getRecommendations)(userId);
        res.json(recommendations);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getUserRecommendations = getUserRecommendations;
