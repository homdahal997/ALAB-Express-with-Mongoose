const Grade = require('../models/grade');

module.exports = {
    createGrade,
    getGrades,
    getGradeById,
    updateGrade,
    deleteGrade,
}
async function createGrade(req, res) {
    try {
        const grade = new Grade(req.body);
        await grade.save();
        res.status(200).json(grade);
    } catch (error) {
        res.status(400).json(err);
    }
}

async function getGrades(req, res) {
    try {
        const grades = await Grade.find({});

        res.status(200).json(grades);
    } catch (err) {
        res.status(400).send(err);
    }
}

// Get a single Grade by ID
async function getGradeById(req, res) {
    try {
        const grade = await Grade.findById(req.params.id);

        res.status(200).json(grade);
    } catch (err) {
        res.status(400).send(err);
    }
}

async function updateGrade(req, res) {
    try {
        const updatedGrade = await Grade.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json(updatedGrade);
    } catch (err) {
        res.status(400).send(err);
    }
}

async function deleteGrade(req, res) {
    try {
        await Grade.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Successfully Deleted the Grade',
        });
    } catch (err) {
        res.status(400).send(err);
    }
}