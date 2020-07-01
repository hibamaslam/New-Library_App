const express = require('express');
const adminauthorRouter = express.Router();
const authorData = require('../model/authorData');

function router(nav)
{


    // -----Display authors -------//

    adminauthorRouter.get('/',function(req,res){  //add books page
        res.render('addauthors',
        {
            nav,
            title:'Add Authors',
        });
    });


    // -----Add New Author -------//

    adminauthorRouter.post('/addauthor',function(req,res){ // button click --add book to db
      
    var item ={
       name: req.body.name,   //body for post, query for get
        born: req.body.born,
       genre: req.body.genre,
       books: req.body.books,
       weblink: req.body.weblink,
       image: req.body.image
        }

       var author = authorData(item);
        author.save();
        res.redirect('/authors');
    });


    // ----Edit Authors -------//

adminauthorRouter.put('/editAuthors',function(req,res){ // edit book - edit books and save to db
    var condition = {_id:req.params.i}
Authordata.updateOne(condition,req.body)
    .then(function(author){
        res.render('author',
        {
            nav,
            title:'Edit Author',
            book
        });
    })

});

return adminauthorRouter

}
module.exports = router; 
    