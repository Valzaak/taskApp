const express = require('express');
const router = express.Router();

const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();


router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    await prisma.eventDate.deleteMany({
        where: {
            taskId: Number(id)
        }
    })

    await prisma.deadline.deleteMany({
        where: {
            taskId: Number(id)
        }
    })

    const task = await prisma.task.delete({
        where: {
            id: Number(id)
        }
    });

    if (task) {
        req.flash('info', 'タスクを追加しました。');
    } else {
        req.flash('info', 'タスクを追加できませんでした。');
    }
    res.redirect('/list');
    });

module.exports = router;
