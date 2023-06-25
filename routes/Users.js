import { _checkUser } from "../controllers/Users.js";
import express from 'express';

export const user_router = express.Router();

user_router.post('/check', _checkUser);