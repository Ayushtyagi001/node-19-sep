const express = require('express');
const connect = require('./connection');
const Student = require('./routes/student')
const app = express();
connect();
app.use(express.json());
app.use(Student);


//localhost:3000/add/user


app.listen(3000,(err)=>{
   if (err) {
    console.error(err);
    
   } else {
    console.log('Server is running on port 3000');
    
   }
})