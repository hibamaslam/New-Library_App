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
            slink:'/',
            mainlink:'/index'
        });
    });


    // -----New User registration-------//

    userRouter.post('/add',function(req,res){ // button click --add user to db
      
    var doc ={
       user_name: req.body.user_name,   //body for post, query for get
       user_email: req.body.user_email,
       user_password: req.body.user_password,
        }

       var user = userData(doc);
        user.save();
        res.redirect('/admin/login');
    });


    userRouter.get('/login',function(req,res){
        res.render('login',
        {
            
            navl:[
                {name:'Home',link:'#'},
                {name:'Books',link:'#'},
                {name:'Authors',link:'#'},
                {name:'Contact',link:'#'},
                {name:'Log Out',link:'#'}
                ],
                title:'Log In',
                brand:'THE LIB',
                hlink:'/home',
                llink:'/admin/login',
                slink:'/',
                mainlink:'/index'
            });
        });
   
    // -----User validation-------//

    userRouter.post('/login/user',function(req,res){
        var doc ={
            user_name:req.body.user_name,   //body for post, query for get
            user_password:req.body.user_password
             }
console.log(doc);
     userData.findOne(doc,function(err,user){
           
            if(!user)
            {
                res.redirect('/admin/login');
                console.log('user does not exist');
                console.log(doc);
            }
            else if(user)
            {
                res.redirect('/home');
                console.log('login successful');
                console.log(user);
               
            }
        });

    });

module.exports = userRouter; 
    