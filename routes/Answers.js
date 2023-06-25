import express from 'express';
import { _insertAnswer } from '../controllers/Answers.js';

export const answers_router = express.Router();

answers_router.post('/', _insertAnswer);