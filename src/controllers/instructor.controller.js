const db = require("../utils/config")

const getInstructor = async (req, res, next) => {
  try {
    const instructors = await db.instructor.findMany();

    if(!instructors){
      throw new CustomError("Error getting Instructor", 500)
    }
    res.status(200).json(instructors)
    
  } catch (error) {
    next(error)
  }
}

const addInstructor = async (req, res, next) => {
  try {
    const videoUrl = req.file.path;
    const newInstructor = await db.instructor.create({
      data,
    })
  
    if(newInstructor) {
      throw new CustomError("Error creating instructor", 500)
    }
  
    res.status(200).json(newInstructor)
  } catch (error) {
    next(error)
  }
}

const deleteInstructor = async (req, res, next) => {
  try {
    const id = req.params.id;
  
    const deletedInstructor = await db.instructor.delete({
      where : {
        id,
      }
    })
  
    if(!deletedInstructor){
      throw new CustomError("Error getting useer", 500)
    }
  
    res.status(200).json(deletedInstructor)
  } catch (error) {
    next(error)
  }
}


const updateInstructor = async(req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
  
    const updatedInstructor = await db.instructor.update({
      where : { id,},
      data,
    })
  
    res.status(200).json(updatedInstructor)
  } catch (error) {
    next(error)
  }

}


module.exports = {  addInstructor, deleteInstructor, updateInstructor, getInstructor}