import { Router } from 'express';
import { index } from '@/controllers/health.controller';

const router = Router();

// GET /api/health
router.route('/')
  .get(index);

export default router;
