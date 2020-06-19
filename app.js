const express = require('express');
const app = new express();

const nav=[
    { link:'/home',name:'Home'},
    { link:'/books',name:'Books'},
    { link:'/authors',name:'Authors'},
    { link:'/contact',name:'Contact'},
    { link:'/',name:'LogOut'}
        ];

app.use(express.static('./public'));

const indexRouter = require('./src/routes/indexRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const homeRouter = require('./src/routes/homeRoutes')(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const contactRouter = require('./src/routes/contactRoutes')(nav);

app.use('/index',indexRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/home',homeRouter);
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/contact',contactRouter);


app.get('/',(req,res)=>{
    res.render("index",
        {
            title:'Library',
            h2: 'Welcome',
            h3:'To',
            p:'The Wonderful World of Books',
            h1:'"THE LIB"',
        llink:'/login',
        lname:'LOGIN',
        slink:'/signup',
        sname:'New to "The LIB"..sign up here',
    });
});

app.set('view engine','ejs');
app.set('views','./src/views');


app.listen(5001,()=>{
console.log('The port listening at: 5001')});