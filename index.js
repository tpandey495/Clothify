const express=require('express');
const app=express();
const exphbs=require('express-handlebars');
const fileUpload = require('express-fileupload');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(fileUpload({ useTempFiles: true }));
const PORT = process.env.PORT || 4444;

// Template engine
const handlebars = exphbs.create({ extname: '.hbs',});

//To set template engine
app.set("view engine","hbs");

// setting diffrent route as middleware
app.use('/product',require('./routes/productRoute').route);
app.use('/user',require('./routes/userRoute').route);
app.use('/cart',require('./routes/cartRoute').route);


//app is listening on http://localhost:4444
app.listen(PORT,()=>{
    console.log("Searver started on http://localhost:4444");
})
