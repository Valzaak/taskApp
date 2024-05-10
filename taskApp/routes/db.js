const express = require('express');
const router = express.Router();

const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

router.get('/', async (req, res, next) => {
    const users = await prisma.user.findMany();
    const data = {
        title: "prisma",
        message: "all records of user",
        data: users,
    }
    console.log(users)
    res.render('db', data);
});



module.exports = router;
