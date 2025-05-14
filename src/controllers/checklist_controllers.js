import {Checklist, Item} from '../models/DBModel.js';


export const GetCheckList = async (req, res) => {
    const { id: userId } = req.user;

    try {
        const checklists = await Checklist.findAll({
            where: { UserId: userId },
            include: [{ model: Item }]
        });

        if (checklists.length === 0) {
            return res.status(404).json({ message: 'No checklists found' });
        }

        res.status(200).json(checklists);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching checklists', error });
    }
}

export const createCheckList = async (req, res) => {

    const { name } = req.body;
    const { id: userId } = req.user;

    try {
        const checklist = await Checklist.create({ name, UserId: userId });
        res.status(201).json(checklist);
    } catch (error) {
        res.status(500).json({ message: 'Error creating checklist', error });
    }
}

export const deleteCheckList = async (req, res) => {
    const { id } = req.params;
    try {
        await Checklist.destroy({ where: { id } });
        res.status(200).json({ message: 'Checklist deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting checklist', error });
    }
}

