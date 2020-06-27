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


// loginRouter.post('/validate',function(req,res){
//     var user_name = req.body.user_name;
//     var user_password = req.body.user_password;

// userData.findOne({user_name:user_name,user_password:user_password},function(err,user){
//     if (err)
//     {   console.log(err);
//         return res.status(500).send();
//     }
//     if(!user)
//     {
//         console.log('user not found');
//         return res.status(404).send();
//     }
//     return res.status(200).send();

// });

// });

module.exports = loginRouter;