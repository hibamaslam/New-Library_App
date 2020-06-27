const express = require('express');
const userRouter = express.Router();
const userData = require('../model/userData');

    userRouter.get('/',function(req,res){  //add books page
        res.render('signup',
        {
            navl:[
            {name:'Home',link:'#'},
            {name:'Books',link:'#'},
            {name:'Authors',link:'#'},
            {name:'Contact',link:'#'},
            {name:'Log Out',link:'#'}
            ],
            title:'Sign Up',
            brand:'THE LIB',
            llink:'/login',
            slink:'/signup',
            mainlink:'/'
        });
    });


    // -----Add New User -------//

    userRouter.post('/add',function(req,res){ // button click --add user to db
      
    var doc ={
       user_name: req.body.user_name,   //body for post, query for get
       user_email: req.body.user_email,
       user_password: req.body.user_password,
        }

       var user = userData(doc);
        user.save();
        res.redirect('/login');
    });


module.exports = userRouter; 
    