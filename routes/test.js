import express from 'express';
import testController from '../controllers/test';

const router = express.Router();

router.route('/')
  .get(testController.test);

export default router;
