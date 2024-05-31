const Grade = require('../models/grade');

module.exports = {
    createGrade,
}

async function createGrade(req, res) {
    try {
        const { scores, class_id, learner_id } = req.body;

        // Check if all required fields are present
        if (!scores || !class_id || !learner_id) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if scores is an array
        if (!Array.isArray(scores)) {
            return res.status(400).json({ error: 'Scores must be an array' });
        }

        // Check if each score has required fields
        for (let score of scores) {
            if (!score.type || !score.score) {
                return res.status(400).json({ error: 'Each score must have a type and a score like ("type":"exam" and "score":20) ' });
            }
        }

        const grade = new Grade(req.body);
        await grade.save();
        res.status(200).json(grade);
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Duplicate key error: a document with these values already exists.' });
        }
        res.status(400).json(error);
    }
}