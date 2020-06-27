const express = require('express');
const adminbookRouter = express.Router();
const Bookdata = require('../model/bookData');

function router(nav)
{

// ------------------Display add Book page -------------------//

    adminbookRouter.get('/',function(req,res){  //add books page
        res.render('addBooks',
        {
            nav,
            title:'Add Books',
        });
    });


// -----------------Add New Book ---------------------//

    adminbookRouter.post('/addBook',function(req,res){ // button click --add book to db
      
    var item ={
       title: req.body.title,   //body for post, query for get
       author: req.body.author,
       genre: req.body.genre,
       ratings: req.body.ratings,
       description: req.body.description,
       image: req.body.image
        }

       var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });

//-------------------------Display Book to edit-----------------------//


adminbookRouter.post('/editBooks/:id',(req,res)=>
Bookdata.findByIdAndUpdate( 
    req.body.id,{$set:req.body},(err,data)=>{
        if (err){res.json({"status":"Failed"});}
        else if (data.n==0){
            console.log(data);
            res.json({"status":"No matches found"});
        }
        else
        Bookdata.find()
        .then((data)=>
        {res.redirect('/books');}
        );
    }
));

// //-------------------------DELETE A BOOK --------------------------//

    adminbookRouter.get('/deleteBooks/:id',function(req,res){
        const id = req.params.id; 
        const del = Bookdata.findByIdAndDelete(id)
    
        del.exec(function(err,data){
            if(err)throw err;
            res.redirect('/books');
        })
    });

return adminbookRouter

}
module.exports = router; 
    