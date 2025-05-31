"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecommendations = void 0;
const axios_1 = __importDefault(require("axios"));
const ML_SERVICE_URL = process.env.ML_SERVICE_URL || 'http://localhost:5001';
const getRecommendations = async (userId) => {
    try {
        const response = await axios_1.default.post(`${ML_SERVICE_URL}/recommend`, { userId });
        return response.data.recommendations;
    }
    catch (error) {
        console.error('ML Service Error:', error);
        throw new Error('Failed to get recommendations');
    }
};
exports.getRecommendations = getRecommendations;
