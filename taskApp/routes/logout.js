const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    req.flash('info', 'ログアウトしました。');
    req.session.userId = undefined;
    res.locals.userId = undefined;
    req.session.userName = undefined;
    res.locals.userName = undefined;
    console.log(req.session);
    res.redirect('/');
});

module.exports = router;
