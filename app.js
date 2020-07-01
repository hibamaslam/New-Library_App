const express = require('express');
const bodyparser = require('body-parser');
const app = new express();


const nav=[
    { link:'/home',name:'Home'},
    { link:'/books',name:'Books'},
    { link:'/addBooks',name:'Add Books'},
    { link:'/authors',name:'Authors'},
    { link:'/addAuthors',name:'Add Authors'},
    { link:'/contact',name:'Contact'},
    { link:'/',name:'LogOut'}
        ];

        app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true})); // for including all data types in post method

const indexRouter = require('./src/routes/indexRoutes');
const userRouter = require('./src/routes/userRoutes');
const homeRouter = require('./src/routes/homeRoutes')(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const contactRouter = require('./src/routes/contactRoutes')(nav);

const adminbookRouter = require('./src/routes/adminbookRoutes')(nav);
const adminauthorRouter = require('./src/routes/adminauthorRoutes')(nav);


app.use('/index',indexRouter);
app.use('/home',homeRouter);
app.use('/contact',contactRouter);

//--------USER LOGIN/SIGNUP------------//
app.use('/admin',userRouter);


//-----DISPLAY /EDIT/DELETE-----------//
app.use('/books',booksRouter);
app.use('/authors',authorRouter);

// ---ADD----- //
app.use('/addBooks',adminbookRouter);
app.use('/addAuthors',adminauthorRouter);




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
        slink:'/admin',
        sname:'New to "The LIB"..sign up here',
    });
});

app.set('view engine','ejs');
app.set('views','./src/views');


app.listen(5000,()=>{
console.log('The port listening at: 5000')});