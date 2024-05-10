const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', async (req, res, next) => {
    const name = req.body.name;
    const password = req.body.password;

    const user = await prisma.user.findUnique({
        where: {
            name: name,
        }
    });

    if (user === null) {
        res.redirect('/login');
    } else {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            req.session.userId = user.id;
            res.locals.userId = user.id;
            req.session.userName = user.name;
            res.locals.userName = user.name;
            req.flash('info', 'ログインしました。');
            console.log(req.session)
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    }
});

module.exports = router;
