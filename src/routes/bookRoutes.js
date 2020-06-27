const express = require('express');
const bookData = require('../model/bookData');
const booksRouter = express.Router();


function router(nav)
{

//------------Display Books-----------------------//

booksRouter.get('/',function(req,res){
        bookData.find()
        .then(function(books){
            res.render('books',
            {
                nav,                        //use the nav ,passed as an argument, defined in app.js.
                title:'Books',
                books                       //sending values of books thru books array already created
            });
        })
   
 });

//------------Display Single Book-----------------------//

booksRouter.get('/:i',function(req,res){
        const i = req.params.i; 
        bookData.findOne({_id:i})
        .then(function(book){
            res.render('book',
            {
                nav,
                title:'Book',
                book
            });
        })
   
});


//-------------------------Display Book to edit-----------------------//

booksRouter.get('/editBooks/:id',function(req,res){
    var id=req.params.id;
    var edit = bookData.findById(id);
    edit.exec(function(err,data){
        if (err) throw err;
        res.render('editBooks',{
            nav,
            title:"Edit Books",
            data
        });
    });
});


// booksRouter.post('/editBooks',(req,res)=>
// bookData.findById(req.body.id,(err,data)=>{
//         if (err){throw err;}
//         else{
//            res.render("editBooks",{
//            nav,
//            title:"Edit",
//            data});
//     }
// })
// );
// --------------Edit Book ---------------------//


booksRouter.post('/editBook',function(req,res){
   
    var edited = bookData.findByIdAndUpdate(req.body.id,{
        title: req.body.title,   
        author: req.body.author,
        genre: req.body.genre,
        ratings: req.body.ratings,
        description: req.body.description,
        image: req.body.image
    })
    edited.exec(function(err,data){
        if (err) throw err;
        res.redirect('/books');
    });
});



// booksRouter.post("/editBook",function(req,res){
//     bookData.findByIdAndUpdate(req.body.id,{$set:req.body},(err,data)=>{
//         if(err){
//             res.json({"status":"Failed"});
//         }
//         else if(data.n==0){
//             res.json({"status":"No book matched"});
//         }
//         else{
//             bookData.find().then(function(data){
//                 res.redirect("/books");
//             })
//         }
//     })
// });




// --------------Delete Book ---------------------//

// booksRouter.post('/deleteBooks',function(req,res){
//     const id = req.body.id; 
//     bookData.findByIdAndDelete({_id:id})
// .then(function(err,data){
//         if(err)throw err;
//         res.redirect('/books');
//     })
// });

booksRouter.get('/deleteBooks/:id',function(req,res){
    var id=req.params.id;
    var del = bookData.findByIdAndDelete(id);
    del.exec(function(err){
        if(err) throw err;
        res.redirect('/books');
    });
});





return booksRouter;
}
module.exports = router;