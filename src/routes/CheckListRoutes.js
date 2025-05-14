import express from 'express';
const router = express.Router();

import { GetCheckList, createCheckList, deleteCheckList } from '../controllers/checklist_controllers.js';
import auth from '../middleware/auth.js';

router.use(auth);

router.get('/checklist', GetCheckList);
router.post('/checklist/create', createCheckList);
router.delete('/checklist/:id', deleteCheckList);

export default router;
