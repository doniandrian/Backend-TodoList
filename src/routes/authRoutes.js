import express from 'express';
const router = express.Router();

import { register, login} from '../controllers/user_controllers.js';


router.post('/register', register);

router.post('/login', login);

export default router;