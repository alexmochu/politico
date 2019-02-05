import express from 'express';
import userRoutes from './users';

const router = express.Router();

router.use('/api/v1/users', userRoutes);

export default router;
