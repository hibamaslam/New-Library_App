const express = require('express');
const booksRouter = express.Router();



function router(nav)
{

    const books = [
           {
           img:'book1.jpg',
           title:"Charlotte's Web",
           genre:'Kids/Teens',
           author:'E.B White',
           ratings:'4 star',
           Description:'This beloved book by E. B. White, author of Stuart Little and The Trumpet of the Swan, is a classic of children\'s literature that is "just about perfect." This high-quality paperback features vibrant illustrations colorized by Rosemary Wells!"'},

           {
            img:'book2.jpg',
            title:"I am Malala",
            genre:'Biography',
            author:'Malala Yousafzai,',
            ratings:'4.7 star',
            Description:'When the Taliban took control of the Swat Valley in Pakistan, one girl spoke out. Malala Yousafzai refused to be silenced and fought for her right to an education.'},

            {
                img:'book3.jpg',
                title:"Out of My Mind",
                genre:'Realistic Fiction',
                author:'Sharon M. Draper',
                ratings:'4.3 star',
                Description:'Melody is not like most people. She cannot walk or talk, but she has a photographic memory; she can remember every detail of everything she has ever experienced. She is smarter than most of the adults who try to diagnose her and smarter than her classmates in her integrated classroom - the very same classmates who dismiss her as mentally challenged because she cannot tell them otherwise. But Melody refuses to be defined by cerebral palsy. And she\'s determined to let everyone know it - somehow.'},

                {
                    img:'book4.jpg',
                    title:"Life of Pi",
                    genre:'Fiction',
                    author:'Yann Martel',
                    ratings:'3.9 star',
                    Description:'Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.'},

                    {
                        img:'book5.jpg',
                        title:"The Kite Runner",
                        genre:' Historical Fiction',
                        author:'Khaled Hosseini',
                        ratings:'4.3 star',
                        Description:'The unforgettable, heartbreaking story of the unlikely friendship between a wealthy boy and the son of his father’s servant, The Kite Runner is a beautifully crafted novel set in a country that is in the process of being destroyed. It is about the power of reading, the price of betrayal, and the possibility of redemption; and an exploration of the power of fathers over sons—their love, their sacrifices, their lies.'},

                        {
                            img:'book6.jpg',
                            title:"To Kill a Mockingbird",
                            genre:'Classics',
                            author:'Harper Lee',
                            ratings:'4.2 star',
                            Description:'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.'},

                            {
                                img:'book7.jpg',
                                title:"The Diary of a Young Girl",
                                genre:'Biography',
                                author:'Anne Frank',
                                ratings:'4.1 star',
                                Description:'Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.'},

                                {
                                    img:'book8.jpg',
                                    title:"Steve Jobs",
                                    genre:'Biography',
                                    author:'Walter Isaacson',
                                    ratings:'4.1 star',
                                    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},

                                    {
                                        img:'book9.jpg',
                                        title:"Freakonomics",
                                        genre:'Nonfiction',
                                        author:'Steven D. Levitt',
                                        ratings:'3.9 star',
                                        Description:'Which is more dangerous, a gun or a swimming pool? What do schoolteachers and sumo wrestlers have in common? Why do drug dealers still live with their moms? How much do parents really matter? What kind of impact did Roe v. Wade have on violent crime? Freakonomics will literally redefine the way we view the modern world.'},
    ];

    booksRouter.get('/',function(req,res){
    res.render('books',
    {
        nav,                        //use the nav ,passed as an argument, defined in app.js.
        title:'Books',
        books                       //sending values of books thru books array already created
    });
 });

    booksRouter.get('/:i',function(req,res){
        const i = req.params.i; 
    res.render('book',
    {
        nav,
        title:'Book',
        book: books[i]
    });
});
return booksRouter;
}
module.exports = router;