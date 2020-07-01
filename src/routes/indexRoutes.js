const express = require('express');
const indexRouter = express.Router();

function router()
{

    indexRouter.get('/',(req,res)=>{
        res.render("index",
            {
                title:'Library',
                h2: 'Welcome',
                h3:'To',
                p:'The Wonderful World of Books',
                h1:'"THE LIB"'
        });
    });

return indexRouter;
}
module.exports = router;