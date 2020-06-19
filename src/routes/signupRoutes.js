const express = require('express');
const signupRouter = express.Router();

    signupRouter.get('/',function(req,res){
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

module.exports = signupRouter;