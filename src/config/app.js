/**
 * @fileoverview Express Application Configuration
 * @author @moobi-kabelo
 * @version 1.0.0
 * @since 2023-10-10
 */
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

dotenv.config();

const app = express();

// Middleware
app.set('trust proxy');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression()); 
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
// Security Headers
app.use(helmet());

export { app };
