import express from 'express';
import { createSkill, getUserSkills } from '../controllers/skillController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createSkill);
router.get('/my-skills', protect, getUserSkills);
router.get('/all', protect, getAllSkills);
router.get('/match', protect, matchSkills);

export default router;
