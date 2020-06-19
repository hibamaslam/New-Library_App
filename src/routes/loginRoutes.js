const express = require('express');
const loginRouter = express.Router();

// function router()
// {
    loginRouter.get('/',function(req,res){
    res.render('login',
    {
        navl:[
        {name:'Home',link:'#'},
        {name:'Books',link:'#'},
        {name:'Authors',link:'#'},
        {name:'Contact',link:'#'},
        {name:'Back',link:'#'}
        ],
        title:'Login',
        brand:'THE LIB',
        name: 'LOGIN',
        hlink:'/home',
        slink:'/signup',
        mainlink:'/'

    });
});
module.exports = loginRouter;