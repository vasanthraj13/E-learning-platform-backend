const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./src/auth/auth.route');


const app = express();
const port = 5002; 

app.use(cors()); 
app.use(bodyParser.json()); 

app.use('/api/auth', authRouter)
app.use('/api/courses')
app.use('/api/instructors')
app.use('/api/users')
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
