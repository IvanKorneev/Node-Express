const {Router}= require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('courses',{
        title:'Curses',
        isCurses:true
    });
});
module.exports= router;