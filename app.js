const express = require('express');
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

app.use(express.urlencoded({extended:true})); // for including all data types in post method
app.use(express.static('./public'));

const indexRouter = require('./src/routes/indexRoutes');
const loginRouter = require('./src/routes/loginRoutes');
const userRouter = require('./src/routes/userRoutes');
const homeRouter = require('./src/routes/homeRoutes')(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const contactRouter = require('./src/routes/contactRoutes')(nav);

const adminbookRouter = require('./src/routes/adminbookRoutes')(nav);
const adminauthorRouter = require('./src/routes/adminauthorRoutes')(nav);

// const editbookRouter = require('./src/routes/editbookRoutes')(nav);
// const editauthorRouter = require('./src/routes/editauthorRoutes')(nav);

// const deletebookRouter = require('./src/routes/deletebookRoutes');
// const deleteauthorRouter = require('./src/routes/deleteauthorRoutes');



app.use('/index',indexRouter);
app.use('/home',homeRouter);
app.use('/contact',contactRouter);

//--------USER------------//
app.use('/signup',userRouter);
app.use('/login',loginRouter);

//-----DISPLAY-----------//
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
        slink:'/signup',
        sname:'New to "The LIB"..sign up here',
    });
});

app.set('view engine','ejs');
app.set('views','./src/views');


app.listen(5000,()=>{
console.log('The port listening at: 5000')});