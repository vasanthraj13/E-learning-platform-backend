const db = require("../utils/config");
const { jwtSign } = require('../utils/jwtVerify')

const loginController = async (req, res, next)=> {
  const { username, password,role } = req.body;
  if(!username || !password){
    throw new CustomError("All fields are mandatory", 400)
  }
        let payload;
         if (role === 'user') {
          payload = await db.User.findUnique({
            where: { username},
          });
        } else if (role === 'admin') {
          payload = await db.Admin.findUnique({
            where: { username },
          });
        }
        else if(role ==='instructore')
          payload = await db.instructor.findUnique({
            where:{username}
          })
         else {
          throw new CustomError("Invalid role specified", 400);
        }
    
        if (!payload || payload.password !== password) {
          throw new CustomError("Incorrect username or password", 401);
        }

  const user = await db.user.findUnique({
    where : { username,}
  })

  if(!user) throw new CustomError("User doesnt exist", 404)

  if(user.password != password){
    throw new CustomError("Incorrect password", 400)
  }

  const token = jwt.sign({
          userName: payload.username,
          userId: payload.id,
          role,
        }, process.env.SECRET_KEY);
    
        if (!token) {
          throw new CustomError("Error creating token", 500);
        }
    
        res.status(200).json({ token, role });
}


// const userlogin = async (req, res) => {
//   const { userName, password, role } = req.body;

//   try {
//     if (!userName || !password) {
//       throw new CustomError("Username and password are required", 400);
//     }

//     let payload;
//     if (role === 'user') {
//       payload = await db.User.findUnique({
//         where: { username: userName },
//       });
//     } else if (role === 'admin') {
//       payload = await db.Admin.findUnique({
//         where: { username: userName },
//       });
//     } else {
//       throw new CustomError("Invalid role specified", 400);
//     }

//     if (!payload || payload.password !== password) {
//       throw new CustomError("Incorrect username or password", 401);
//     }

//     const token = jwt.sign({
//       userName: payload.username,
//       userId: payload.id,
//       role,
//     }, process.env.SECRET_KEY);

//     if (!token) {
//       throw new CustomError("Error creating token", 500);
//     }

//     res.status(200).json({ token, role });
//   } catch (error) {
//     console.error(error);
//     res.status(error.statusCode || 500).json({ error: error.message });
//   }
// };

const { CustomError } = require('../utils/customError');


const registerController  = async (req,res) =>{
  const {username,password,fullName,email} = req.body
  if(!username || !password || !fullName || !email){
    res.send('all fields are mandatory').statusCode(404);
  }
  const data = await db.user.create({
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