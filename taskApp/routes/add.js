const express = require('express');
const router = express.Router();

const ps = require('@prisma/client');
const prisma = new ps.PrismaClient();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = {
    title: 'Add Task',
    message: 'Add Task!',
  }
  res.render('add', data);
});

router.post('/', async (req, res, next) => {
  const name = req.body.name;
  const category = req.body.category;
  const deadline = req.body.deadline;
  const deadlineDescription = req.body.deadlineDescription;
  const startDay= req.body.startDay;
  const endDay = req.body.endDay;
  const isSubmit = req.body.isSubmit === 'true' ? true : false;

  const task = await prisma.task.create({
    data: {
      name: name,
      category: category,
      isSubmit: isSubmit,
      userId: req.session.userId,
    }
  });

  if (typeof deadline !== 'string') {
    console.log(deadline);
    deadline.forEach(async (d, i) => {
      const date = new Date(d);
      // const dateString = date.toISOString().split('T')[0];

      await prisma.deadline.create({
        data: {
          deadline: date,
          description: deadlineDescription[i],
          taskId: task.id,
        }
      });
    });
  } else {
    const deadlineDate = new Date(deadline);
    // const deadlineDateString = deadlineDate.toISOString().split('T')[0];
    await prisma.deadline.create({
      data: {
        deadline: deadlineDate,
        description: deadlineDescription,
        taskId: task.id,
      }
    });
  }

  if (typeof startDay !== 'string') {
    console.log(startDay);
    startDay.forEach(async (d, i) => {
      const startDate = new Date(d);
      // const dateString = date.toISOString().split('T')[0];
      const endDate = new Date(endDay[i]);

      await prisma.eventDate.create({
        data: {
          startDay: startDate,
          endDay: endDate,
          taskId: task.id,
        }
      });
    });
  } else {
    const startDate = new Date(startDay);
    // const startDateString = startDate.toISOString().split('T')[0];
    if (!(endDay === '')) {
      const endDate = new Date(endDay);
      // const endDateString = endDate.toISOString().split('T')[0];
      await prisma.eventDate.create({
        data: {
          startDay: startDate,
          endDay: endDate,
          taskId: task.id,
        }
      });
    }
  }


  res.redirect('/add');
});

module.exports = router;
