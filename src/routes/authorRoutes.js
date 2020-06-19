const express = require('express');
const authorRouter = express.Router();

function router(nav)
{
    const authors = [
        {
        img:'author1.jpg',
        name:"Stephen King",
        born:'in Portland, Maine, The United States',
        genre:'Horror, Mystery, Literature & Fiction',
        books:'The Shining,The Stand,Misery,Carrie,Pet Sematary and many more',
        weblink:'http://www.stephenking.com'}, 

        {
        img:'author2.jpg',
        name:"Dan Brown",
        born:'in Exeter, New Hampshire, The United States',
        genre:'Mystery & Thrillers, Fiction, Suspense',
        books:'Angels & Demons,The Da Vinci Code,Deception Point,Digital Fortress and many more',
        weblink:'http://www.danbrown.com'},  

        {
        img:'author3.jpg',
        name:"Nicholas Sparks",
        born:'in Omaha, Nebraska, The United States',
        genre:'Literature & Fiction, Romance',
        books:'The Notebook,A Walk to Remember,Dear John,Message in a Bottle,The Last Song and many more',
        weblink:'http://www.nicholassparks.com/'}, 

        {
        img:'author4.jpg',
        name:"Khaled Hosseini",
        born:'in Kabul, Afghanistan,March 04, 1965',
        genre:'Literature & Fiction',
        books:'The Kite Runner,A Thousand Splendid Suns,And the Mountains Echoe,Sea Prayer',
        weblink:'http://www.khaledhosseini.com/'}, 

        {
         img:'author5.jpg',
         name:"Paulo Coelho",
         born:'in Rio de Janeiro, Brazil',
         genre:'Literature & Fiction, Nonfiction, Biographies & Memoirs',
         books:'The Alchemist,Veronika Decides to Die,Eleven Minutes,Brida,The Pilgrimage and many more',
        weblink:'http://www.paulocoelhoblog.com'}, 

        {
         img:'author6.jpg',
         name:"Elizabeth Gilbert",
         born:'in Waterbury, Connecticut, The United States',
         genre:'Memoir, Biography, Literature & Fiction',
         books:'Eat Pray Love,City of Girls,The Signature of All Things,Pilgrims and Other Stories and many more',
        weblink:'http://www.elizabethgilbert.com'}
        
 ];


    authorRouter.get('/',function(req,res){
    res.render('authors',
    {
        nav,
        title:'Authors',
        authors
    });
});


    authorRouter.get('/:i',function(req,res){
     const i = req.params.i; 
    res.render('author',
    {
        nav,
        title:'Author',
        author: authors[i]
    });
    });
return authorRouter;
}
module.exports = router;
