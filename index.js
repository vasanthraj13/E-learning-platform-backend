const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./src/auth/auth.route');
const courserouter = require('./src/routes/course.route')
const instructorrouter = require('./src/routes/instructor.route');
const { AuthVerify } = require('./src/middlewares/AuthVerify');
const app = express();
const port = 5002; 

app.use(cors()); 
app.use(bodyParser.json()); 

app.use('/api/auth', authRouter)
app.use('/api/courses', AuthVerify, courserouter)
app.use('/api/instructors', AuthVerify, instructorrouter)
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
