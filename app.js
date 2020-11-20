const express = require('express');
var path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    logDate(req);
    res.render('index')
});

app.post('/', function(req,res) {
    logDate(req);
    const Discord = require('discord.js');
    const client = new Discord.Client();
    client.on('ready', () => {
        client.user.setStatus("invisible");
        res.render('index_token_success');
        client.destroy();
    });
    client.login(req.body.token).catch(err => {
        res.render('index_token_invalid');
    });
});

app.listen(49162, () => {
    console.log('Server started on port 49162');
});

// FUNCTIONS

function logDate(req) {
    if ((new Date).getDate() < 10) {
        var date = "0" + (new Date).getDate()
    }
    else {
        var date = (new Date).getDate()
    }
    if (((new Date).getMonth() + 1) == 1) {
        var month = "Jan"
    }
    else if (((new Date).getMonth() + 1) == 2) {
        var month = "Feb"
    }
    else if (((new Date).getMonth() + 1) == 3) {
        var month = "Mar"
    }
    else if (((new Date).getMonth() + 1) == 4) {
        var month = "Apr"
    }
    else if (((new Date).getMonth() + 1) == 5) {
        var month = "May"
    }
    else if (((new Date).getMonth() + 1) == 6) {
        var month = "Jun"
    }
    else if (((new Date).getMonth() + 1) == 7) {
        var month = "Jul"
    }
    else if (((new Date).getMonth() + 1) == 8) {
        var month = "Aug"
    }
    else if (((new Date).getMonth() + 1) == 9) {
        var month = "Sep"
    }
    else if (((new Date).getMonth() + 1) == 10) {
        var month = "Oct"
    }
    else if (((new Date).getMonth() + 1) == 11) {
        var month = "Nov"
    }
    else if (((new Date).getMonth() + 1) == 12) {
        var month = "Dec"
    }
    if ((new Date).getUTCHours() < 10) {
        var hours = "0" + ((new Date).getUTCHours())
    }
    else {
        var hours = ((new Date).getUTCHours())
    }
    if ((new Date).getUTCMinutes() < 10) {
        var minutes = "0" + ((new Date).getUTCMinutes())
    }
    else {
        var minutes = ((new Date).getUTCMinutes())
    }
    if ((new Date).getUTCSeconds() < 10) {
        var seconds = "0" + ((new Date).getUTCSeconds())
    }
    else {
        var seconds = ((new Date).getUTCSeconds())
    }
    console.log(`[${date}/${month}/${(new Date).getFullYear()} ${hours}:${minutes}:${seconds}] [${req.ip}] [${req.method}] ${req.protocol} ${req.originalUrl}`)
}