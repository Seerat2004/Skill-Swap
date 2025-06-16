import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, sendMessage); // POST /api/messages
router.get('/:userId', protect, getMessages); // GET /api/messages/:userId

export default router;
