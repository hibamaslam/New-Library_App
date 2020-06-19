const express = require('express');
const homeRouter = express.Router();

function router(nav)
{

    const carouselHome = [
        {
            img:'carousel1.jpg',
            quote:'Nothing is pleasanter than exploring a library.',
            source:'Walter Savage Landor'},
        {
            img:'carousel3.JPG',
            quote:'The only thing that you absolutely have to know, is the location of the library.',
            source:'Albert Einstein'},
        {
            img:'carousel5.jpg',
            quote:'Libraries were full of ideas – perhaps the most dangerous and powerful of all weapons.',
            source:'Sarah J. Maas'}
        
    ];

    const booksHome = [
        {img:'book1.jpg',name:'Book1'},
        {img:'book2.jpg',name:'Book1'},
        {img:'book3.jpg',name:'Book1'},
        {img:'book4.jpg',name:'Book1'},
        {img:'book5.jpg',name:'Book1'},
        {img:'book6.jpg',name:'Book1'},
        {img:'book7.jpg',name:'Book1'},
        {img:'book8.jpg',name:'Book1'},
        {img:'book9.jpg',name:'Book1'},
        {img:'book10.jpg',name:'Book1'},
        {img:'book11.jpg',name:'Book1'},
        {img:'book12.jpg',name:'Book1'}
    ];

    homeRouter.get('/',function(req,res){
    res.render('home',
    {
        nav,
        title:'Home',
        carouselHome,
        booksHome
    });
});
return homeRouter;
}
module.exports = router;
