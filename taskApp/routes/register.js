const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', async (req, res, next) => {

    const name = req.body.name;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name: name,
            password: hashedPassword,
        }
    });

    req.session.userId = user.id;
    req.session.userName = user.name;
    console.log(req.session);

    res.redirect('/');
});

module.exports = router;
