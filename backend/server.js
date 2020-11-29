import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import connectDB from './config/db'
import userRoutes from './routes/userRoutes'

dotenv.config();

connectDB();

const app = express();


app.use(express.json());

app.use('/api/users' , userRoutes)