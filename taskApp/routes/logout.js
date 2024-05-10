const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
    req.flash('info', 'ログアウトしました。');
    console.log(req.session);
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            console.log('session destroyed.')
            res.redirect('/');
        }
    }
);
});

module.exports = router;
