const express=require('express');

//Create instance of expressRouter
const bookRouter=express.Router();

const books=[
    {
        "id": "1",
        "title": "The Great Gatsby",
        "author": "F. Scott"
    },
    {
        "id": "2",
        "title": "Moby Dick",
        "author": "Herman Melville"
    },
    {
        "id": "3",
        "title": "The MERN Stack",
        "author": "Masyntech"
    },
    {
        "id": "4",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee"
    },
    {
        "id": "5",
        "title": "1984",
        "author": "George Orwell"
    },
    {
        "id": "6",
        "title": "Pride and Prejudice",
        "author": "Jane Austen"
    },
    {
        "id": "7",
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger"
    },
    {
        "id": "8",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien"
    },
    {
        "id": "9",
        "title": "War and Peace",
        "author": "Leo Tolstoy"
    },
    {
        "id": "10",
        "title": "The Odyssey",
        "author": "Homer"
    }
]


//Using the route() for route '/'

bookRouter.route('/').get((req,res)=>{    //Get all books
    res.json({ 
        status:'success',
        message:'Books fetched successfully',
        data:books
    });
}).post((req,res)=>{                   //Create a book
    const newBook=req.body;
    books.push(newBook);
    res.json({
        status:'success',
        message:'Book created successfully',
        data:books
    });
})

//Usgin the route() for '/:id'

bookRouter.route('/:id').get((req,res)=>{             //Get a specific book
    const id=req.params.id;
    const bookFound=books.find((book)=>book.id===id);
    if(!bookFound){
        return res.json({
            status:'failed',
            message:`Book with id ${id} not found`
        });
    }
    res.json({
        status:'success',
        message:'Book fetched successfully',
        data:bookFound
    });
}).delete((req,res)=>{                                  //Delete a specific book
    const id=req.params.id;
    const bookIndex=books.findIndex((book)=>book.id===id);
    if(bookIndex===-1){
        return res.json({
            status:'failed',
            message:`Book not found with id ${id}`
        });
    }
    books.splice(bookIndex,1);
    res.json({
        status:'success',
        message:'Book deleted successfully',
        data:books
    });
});


module.exports=bookRouter;