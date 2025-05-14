import {Checklist, Item } from '../models/DBModel.js';


export const GetCheckListITem = async (req, res) => {
    const { id: userId } = req.user;

    const { iditem } = req.params;

    try {
        const checklist = await Checklist.findOne({
            where: { id: iditem, UserId: userId },
            include: [{ model: Item }]
        });

        if (!checklist) {
            return res.status(404).json({ message: 'Checklist not found' });
        }

        res.status(200).json(checklist);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching checklist', error });
    }
    
}

export const createchecklistItem = async (req, res) => {
    const { itemName, ChecklistId } = req.body;
    try {
        const item = await Item.create({ itemName, ChecklistId });
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
    }
}

export const updatechecklistItem = async (req, res) => {
    const { iditem } = req.params;
    const { itemName, is_done } = req.body;
    try {
        const item = await Item.findByPk(iditem);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        item.itemName = itemName;
        item.is_done = is_done;
        await item.save();
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
}

export const deletechecklistItem = async (req, res) => {
    const { iditem } = req.params;
    try {
        await Item.destroy({ where: { id: iditem } });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
}

export const renamechecklistItem = async (req, res) => {
    const { iditem } = req.params;
    const { itemName } = req.body;
    try {
        const

        item = await Item.findByPk(iditem);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        item.itemName = itemName;
        await item.save();
        res.status(200).json(item);
    }
    catch (error) {
        res.status(500).json({ message: 'Error renaming item', error });
    }
}

