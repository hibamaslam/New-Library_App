const express = require('express');
const authorData = require('../model/authorData');
const authorRouter = express.Router();

function router(nav)
{

//------------Display Authors-----------------------//


    authorRouter.get('/',function(req,res){
        authorData.find()
        .then(function(authors){
            res.render('authors',
            {
                nav,
                title:'Authors',
                authors
            });
        });
});

//------------Display Single Author-----------------------//


    authorRouter.get('/:i',function(req,res){
     const i = req.params.i; 
     authorData.findOne({_id:i})
     .then (function(author){
        res.render('author',
        {
            nav,
            title:'Author',
            author
        });
     })
});


//-------------------------Display Author to edit-----------------------//

authorRouter.get('/editAuthors/:id',function(req,res){
    var id=req.params.id;
    var edit = authorData.findById(id);
    edit.exec(function(err,data){
        if (err) throw err;
        res.render('editAuthors',{
            nav,
            title:"Edit Authors",
            data
        });
    });
});


// --------------Edit Book ---------------------//


authorRouter.post('/editAuthor',function(req,res){
   
    var edited = authorData.findByIdAndUpdate(req.body.id,{
        name: req.body.name,  
        born: req.body.born,
        genre: req.body.genre,
        books: req.body.books,
        weblink: req.body.weblink,
        image: req.body.image
    })
    edited.exec(function(err,data){
        if (err) throw err;
        res.redirect('/authors');
    });
});


// --------------Delete Book ---------------------//

authorRouter.get('/deleteAuthors/:id',function(req,res){
    var id=req.params.id;
    var del = authorData.findByIdAndDelete(id);
    del.exec(function(err){
        if(err) throw err;
        res.redirect('/authors');
    });
});






return authorRouter;
}
module.exports = router;
