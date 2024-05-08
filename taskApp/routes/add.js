const express = require('express');
const router = express.Router();

const mydb = [
    {
      id: 1,
      category: 'SE',
      name: 'タスク1',
      deadline: {
        d1: { year: 2021, month: 12, day: 31 },
        d2: {year: 2021, month: 3, day: 31},
      },
      start_date: {
        d1: { year: 2021, month: 3, day: 31 },
        d2: {year: 2021, month: 3, day: 31},
      },
      end_date: {
        d1: { year: 2021, month: 3, day: 31 },
        d2: {year: 2021, month: 3, day: 31},
      },
      description: '説明1',
      isSubmit: true },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = {
    title: 'Add Task',
    message: 'Add Task!',
    mydb: mydb,
  }
  res.render('add', data);
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  res.redirect('/add');
});

module.exports = router;
