import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import datasetRoutes from './routes/datasetRoutes.js';
import miningRoutes from './routes/miningRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/dataset', datasetRoutes);
app.use('/api/mining', miningRoutes);

// Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'DataMine API Engine Online' });
});

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// Start Persistent Server Listening
const server = app.listen(PORT, () => {
  console.log(`Backend server permanently running on http://localhost:${PORT}`);
});

// Prevent premature process exits
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});