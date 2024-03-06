const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname , "../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");

app.set('view engine' , 'hbs');
app.set('views' , template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

//routing path//
// app.get(route,callback)
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/index",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/projects",(req,res)=>{
    res.render('projects');
});

app.get("/contact",(req,res)=>{
    res.render('contact');
});

app.get("*",(req,res)=>{
    res.send("404 error");
});

app.listen(port, ()=>{
    console.log(8000);
});