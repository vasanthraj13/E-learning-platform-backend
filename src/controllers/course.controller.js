const db = require("../utils/config")

const getCourses = async (req, res, next) => {
  try {
    const courses = await db.course.findMany();

    if(!courses){
      throw new CustomError("Error getting courses", 500)
    }
    res.status(200).json(courses)
    
  } catch (error) {
    next(error)
  }
}

const addCourse = async (req, res, next) => {
  const videoUrl = req.file.path;
  const userId = req.user.id;
  const newCourse = await db.course.create({
    data : {
      courseName : data.courseName,
      fees : data.fees,
      subject : data.subject,
      instructor : {
        connect : {
          id : userId
        }
      }
    }
  })

  if(newCourse) {
    throw new CustomError("Error creating course", 500)
  }

  res.status(200).json(newCourse)
}

const deleteCourse = async (req, res, next) => {
  const id = req.params.id;

  const deletedCourse = await db.course.delete({
    where : {
      id,
    }
  })

  if(!deletedCourse){
    throw new CustomError("Error getting useer", 500)
  }

  res.status(200).json(deleteCourse)
}


const updateCourse = async(req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  const updatedCourse = await db.course.update({
    where : { id,},
    data,
  })

  res.status(200).json(updatedCourse)
}

module.exports = { addCourse, deleteCourse, getCourses, updateCourse }