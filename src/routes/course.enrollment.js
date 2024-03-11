const { Router } = require('express');
const {
  enrollStudent,
  getEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment
} = require('../controllers/courseEnrollment.controller');

const router = Router();

router.route('/').get(getEnrollments).post(enrollStudent);
router.route('/:id').get(getEnrollmentById).put(updateEnrollment).delete(deleteEnrollment);

module.exports = router;
