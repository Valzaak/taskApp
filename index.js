const express = require('express');
const app = express();
const mysql = require('mysql');
const mysqlSetting = {
    host: 'localhost',
    user: 'root',
    password: 'Hiroki135',
    database: 'test'
};
const connection = mysql.createConnection(mysqlSetting);

const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs");
})




app.listen(port);
