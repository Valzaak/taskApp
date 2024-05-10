const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const moment = require('moment');
const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

router.get("/:id", async (req, res) => {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(req.params.id)
        },

    });

    const deadlines = await prisma.deadline.findMany({
        where: {
            taskId: task.id
        },
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
        title: "Content",
        task: task,
        deadlines: deadlines,
        days: days,
    };
    console.log(data)

    res.render("content", data);
});

module.exports = router;
