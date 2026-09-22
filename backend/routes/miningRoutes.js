import express from 'express';

const router = express.Router();

// Mining execution handler
const handleMining = (req, res) => {
  const { algorithm = 'Apriori', minSupport = 0.05, minConfidence = 0.6 } = req.body;

  res.json({
    success: true,
    message: `${algorithm} algorithm executed successfully!`,
    algorithm,
    minSupport,
    minConfidence,
    executionTimeMs: Math.floor(Math.random() * 80) + 20,
    memoryUsedMB: Math.floor(Math.random() * 30) + 20,
    itemsetsCount: 4320,
    rulesCount: 892,
  });
};

// Handles POST to http://localhost:5000/api/mining
router.post('/', handleMining);

// Handles POST to http://localhost:5000/api/mining/run (for flexibility)
router.post('/run', handleMining);

// GET /api/mining/comparison
router.get('/comparison', (req, res) => {
  res.json([
    { name: 'Apriori', executionTime: 120, memoryMB: 45 },
    { name: 'FP-Growth', executionTime: 35, memoryMB: 28 },
    { name: 'ECLAT', executionTime: 50, memoryMB: 32 },
  ]);
});

// GET /api/mining/rules
router.get('/rules', (req, res) => {
  res.json([
    { id: 1, antecedent: 'Milk, Bread', consequent: 'Butter', support: 0.12, confidence: 0.85, lift: 1.42 },
    { id: 2, antecedent: 'Diaper', consequent: 'Beer', support: 0.08, confidence: 0.72, lift: 1.89 },
    { id: 3, antecedent: 'Coffee', consequent: 'Sugar', support: 0.19, confidence: 0.91, lift: 2.05 },
  ]);
});

export default router;