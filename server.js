const express=require('express');
const bookRouter = require('./routes/bookRoutes');
const app=express();
const PORT=8082;

//Receiving request from the client
app.use(express.json());        //built-in middleware


//Home Route
app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:'Welcome to my first book api using express'
    })
})

//Route to Books
app.use('/books',bookRouter);

//start the server
app.listen(PORT,console.log(`Server is running on port ${PORT}`));