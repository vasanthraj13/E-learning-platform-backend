const db = require("../utils/config");

const loginController = async (req, res, next)=> {
  const { username, password } = req.body;
  if(!username || !password){
    throw new CustomError("All fields are mandatory", 400)
  }

  const user = await db.user.findUnique({
    where : { username,}
  })

  if(!user) throw new CustomError("User doesnt exist", 404)

  if(user.password != password){
    throw new CustomError("Incorrect password", 400)
  }

  const token = 

  res.statuc(200).json({

  })
}

const db = require('../utils/config');
const { CustomError } = require('../utils/customError');


const registerController  = async (req,res) =>{
  const {username,password,fullName,email} = req.body
  if(!username || !password || !fullName || !email){
    res.send('all fields are mandatory').statusCode(404);
  }
  const data = await db.User.create({
    data:{
      username,
      password,
      fullName,
      email
    }
    }
  )
  res.json(data)
}

const currentController = async(req, res) => {
  const user = req.user;
  if(!user){
    throw new CustomError("User not Available", 400)
  }


  res.status(200).json(user)
}

module.exports = {registerController, loginController, currentController}