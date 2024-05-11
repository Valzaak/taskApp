const express = require('express');
const router = express.Router();

const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

router.get('/', async (req, res, next) => {
    const tasks = await prisma.task.findMany({
        where: {
            userId: req.session.userId
        },
        orderBy: {
            createdAt: 'desc',
        }
    }
    );
    const deadlines = [];
    tasks.forEach(async (task) => {
        const deadline = await prisma.deadline.findMany({
            where: {
                taskId: task.id
            },
        });
        deadlines.push(deadline);
    });
    console.log(tasks);
    const data = {
        user: req.session.userName,
        tasks: tasks,
        deadlines: deadlines,
    }
    res.render('list', data);
});



module.exports = router;
