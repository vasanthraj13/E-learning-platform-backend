const { Router } = require('express');
const { addInstructor, deleteInstructor, getInstructor, updateInstructor } = require('../controllers/instructor.controller')

const router = Router();

router.route('/').get(getInstructor).post(addInstructor)
router.route('/:id').delete(deleteInstructor).put(updateInstructor)

module.exports = router;
