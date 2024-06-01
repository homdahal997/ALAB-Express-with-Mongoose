const { Router } = require('express');
const gradesCtrl = require('../controllers/grades.js');

const router = Router();

router.post('/', gradesCtrl.createGrade);
router.get('/', gradesCtrl.getGrades);
router.get('/:id', gradesCtrl.getGradeById);
router.patch('/', gradesCtrl.updateGrade);
router.delete('/', gradesCtrl.deleteGrade);

module.exports = router;