import express from 'express';
const router = express.Router();

import { GetCheckListITem, createchecklistItem,  updatechecklistItem, deletechecklistItem, renamechecklistItem} from '../controllers/items_controllers.js';
import auth from '../middleware/auth.js';

router.use(auth);


router.get('/checklist/:id/item', GetCheckListITem);

router.post('/checklist/:id/item', createchecklistItem);

router.get('/checklist/:id/item/:iditem', GetCheckListITem);

router.put('/checklist/:id/item/:iditem', updatechecklistItem);

router.delete('/checklist/:id/item/:iditem', deletechecklistItem);

router.put('/checklist/:id/item/rename/:iditem', renamechecklistItem);

export default router;

