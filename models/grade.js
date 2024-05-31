const { Schema, model } = require('../config/db-connection');

const scoreSchema = Schema({
    type: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
}, { _id: false });

const gradeSchema = Schema({
    scores: [scoreSchema],
    class_id: {
        type: Number,
        required: true,
    },
    learner_id: {
        type: Number,
        required: true,
    },
}, { versionKey: false });

module.exports = model('Grade', gradeSchema);