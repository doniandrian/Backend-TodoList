import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './src/config/database.js';
import authRoutes from './src/routes/authRoutes.js';
import checklistRoutes from './src/routes/CheckListRoutes.js';
import checklistitem from './src/routes/CheckListItem.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.sync({alter: true}).then(() => {
    console.log('Database terhubung');
} ).catch((err) => {
    console.log(err);
});


app.use('/api', authRoutes); 
app.use('/api', checklistRoutes);  
app.use('/api', checklistitem);  

app.listen(8080, () => {
    console.log('Server berjalan di port 8080');
});