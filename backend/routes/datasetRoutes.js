import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file provided' });
  }
  res.json({
    message: 'File uploaded successfully',
    filename: req.file.filename,
    size: req.file.size,
  });
});

router.get('/summary', (req, res) => {
  res.json({
    totalTransactions: 128450,
    totalItems: 4320,
    avgBasketSize: 4.2,
  });
});

export default router;
