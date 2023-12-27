require("dotenv").config();
const express = require("express");
const app = express();
const userRouter =  require("../REST API/api/users/user.router");
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.json())

app.get("/api",(req,res)=> {
    res.json({
        success : 1,
        message : "Rest api is working "

    });
});
app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT,() => {
    console.log("Server is running",process.env.APP_PORT);
});
// app.use(express.static(path.join(__dirname, 'html')));
// var engines = require('consolidate');

// app.set('views', __dirname + '/views');
// app.engine('html', engines.mustache);
// app.set('view engine', 'html');

app.get('/',(req,res)=> {
    res.render("index.ejs")
    //res.render("./css/login.css")
})
//comment
app.use(express.static(__dirname + '/views'));

app.get('/login',(req,res)=> {
    res.render("login.ejs")
    //res.render("./css/login.css")
})
//comment
app.use(express.static(__dirname + '/views'));


app.get('/register',(req,res)=> {
    res.render("register.ejs")
})


