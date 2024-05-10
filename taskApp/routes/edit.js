const express = require('express');
const router = express.Router();
const moment = require('moment');

const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const task = await prisma.task.findUnique({
        where: {
            id: Number(id),
        }
    });
    const deadlines = await prisma.deadline.findMany({
        where: {
            taskId: task.id,
        }
    });
    deadlines.map((deadline) => {
        deadline.deadline = moment(deadline.deadline).format('YYYY-MM-DD');
    });
    const days= await prisma.eventDate.findMany({
        where: {
            taskId: task.id
        },
    });
    days.map((day) => {
        day.startDay = moment(day.startDay).format('YYYY-MM-DD');
        day.endDay = moment(day.endDay).format('YYYY-MM-DD');
    });

    const data = {
        taskId: id,
        title: "Edit Task",
        content: `edit task${id}`,
        task: task,
        deadlines: deadlines,
        days: days,
    }
    console.log(data);

    res.render('edit', data);
});

router.post('/:id', async (req, res, next) => {

    const taskId = req.params.id;
    console.log(req.body.deadline, 'deadline');
    console.log(req.body.startDay, 'startDay');
    console.log(req.body.endDay, 'endDay');

    await prisma.task.update({
        where: {
            id: Number(taskId),
        },
        data: {
            name: req.body.name,
            category: req.body.category,
            isSubmit: req.body.isSubmit === 'true' ? true : false,
        }
    });

    const deadline = req.body.deadline;
    const deadlineDescription = req.body.deadlineDescription;
    console.log(typeof deadline, 'deadline');


    await prisma.deadline.deleteMany({
        where: {
            taskId: Number(taskId),
        }
    });

    if (typeof deadline !== 'string') {
        for (let i = 0; i < deadline.length; i++) {
            await prisma.deadline.create({
                data: {
                    deadline: new Date(deadline[i]),
                    description: deadlineDescription[i],
                    taskId: Number(taskId),
                }
            });
        }
    } else {
        await prisma.deadline.create({
            data: {
                deadline: new Date(deadline),
                description: deadlineDescription,
                taskId: Number(taskId),
            }
        });
    }

    const startDay= req.body.startDay;
    const endDay = req.body.endDay;
    await prisma.eventDate.deleteMany({
        where: {
            taskId: Number(taskId),
        }
    });

    if (typeof startDay !== 'string') {
        for (let i = 0; i < startDay.length; i++) {
            await prisma.eventDate.create({
                data: {
                    startDay: new Date(startDay[i]),
                    endDay: new Date(endDay[i]),
                    taskId: Number(taskId),
                }
            });
        }
    } else {
        await prisma.eventDate.create({
            data: {
                startDay: new Date(startDay),
                endDay: new Date(endDay),
                taskId: Number(taskId),
            }
        });
    }
    res.redirect('/list');
});

module.exports = router;
