import sequalize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db = new sequalize(
    process.env.VITE_DB_NAME,
    process.env.VITE_DB_USERNAME,
    process.env.VITE_DB_PASSWORD, {
    host: process.env.VITE_DB_HOST,
    dialect: process.env.VITE_DB_DIALECT,
    port: process.env.VITE_DB_PORT,


});

export default db;