const express=require('express');
const path=require('path');
const app=express();
const exphbs=require('express-handlebars');
const fileUpload = require('express-fileupload');
const  session = require('cookie-session');
app.use(session({secret: 'mySecret', resave: false, saveUninitialized: false}));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.static('upload'));
app.use(fileUpload({ useTempFiles: true }));

const PORT = process.env.PORT || 4444;

// Template engine
const handlebars = exphbs.create({ extname: '.hbs',});
// app.engine('.hbs', handlebars.engine);
app.set("view engine","hbs");

// app.use(fileUpload());
app.use('/product',require('./routes/productRoute').route);

app.use('/user',require('./routes/userRoute').route);

app.use('/cart',require('./routes/cartRoute').route);

app.listen(PORT,()=>{
    console.log("Searver started on http://localhost:4444");
})
