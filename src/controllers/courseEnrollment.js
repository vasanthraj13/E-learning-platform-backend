const db = require("../utils/config")
const {CustomError} = require('../utils/customError')


const courseEnroll = async (req, res, next) => {
  const data = req.body;

  const courseEnrolled = await db.courseEnrollment.create({
    data : {
      joiningDate : Date.now(),
      courseId : data.courseId,
      userId : data.userId,
    }
  })

  if(courseEnrolled) throw new CustomError("Error enrolling course", 500);

  res.status(201).json({
    message : "Successfully enroller",
    courseEnrolled
  })
} 


const courseDeroll = async (req, res, next) => {
  const course = await db.courseEnrollment.delete({
    where : {id}
  })

  if(course) throw new CustomError("Error derolling course", 500)

  res.status(200).json({
    message : "Course access removed for this user"
  })
}


module.exports = { courseEnroll, courseDeroll }