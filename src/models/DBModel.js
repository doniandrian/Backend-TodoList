import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;



const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { freezeTableName: true, timestamps: false });


const Checklist = db.define('Checklist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false });


const Item = db.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    itemName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { freezeTableName: true, timestamps: false });

Checklist.belongsTo(User);
User.hasMany(Checklist);

Item.belongsTo(Checklist);
Checklist.hasMany(Item);


export { User, Checklist, Item };
