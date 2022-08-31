const express=require('express');
const app=express();
const exphbs=require('express-handlebars');
const fileUpload = require('express-fileupload');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(fileUpload({ useTempFiles: true }));
const PORT =process.env.PORT||4444;
const path=require('path');
var cookieParser=require('cookie-parser')



// To setup handlebars

var hbs = exphbs.create({
    helpers: {
        sayHello: function () { alert("Hello World") },
        getStringifiedJson: function (value) {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieParser())

// setting diffrent route as middleware
app.use('/product/cart',require('./routes/cartRoute').route);
app.use('/product',require('./routes/productRoute').route);
app.use('/user',require('./routes/userRoute').route);
app.use('/cart',require('./routes/cartRoute').route);
app.use('/',require('./routes/productRoute').route);



//app is listening on http://localhost:4444
app.listen(PORT,()=>{
    console.log("Searver started on http://localhost:"+PORT);
})
