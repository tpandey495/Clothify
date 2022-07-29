const route=require('express').Router();
const db=require('../db');
const cloudinary= require("cloudinary").v2
const jwt = require("jsonwebtoken");
//for users

route.get("/add",(_req,res)=>{
        res.render('person_add')
})
    
    
route.post("/pages/add",(req,res)=>{
      console.log(req.body)
      db.addNewPerson(req.body.Email,req.body.Name,req.body.Phone, req.body.password)
    .then(()=>{
       res.redirect('/pages/login')
      })
      .catch((err)=>{
         res.send(err) 
      })
})



// user log in 
route.get("/login",(_req,res)=>{
      res.render('login')
})
  
route.post("/login", async(req,res)=>{
      console.log(req.body)
      let { username, password } = req.body;
      const isUser = await db.isUser(username, password);
      if(isUser.length != 0 && isUser[0]){
           let token = jwt.sign({user_id : isUser[0].user_id}, process.env.SECRET_KEY, { expiresIn: '1800s' })
           req.session.token = token;
           console.log(req.session.token);
           res.redirect(`/pages/product/?valid=${token}`)
      }     
      else{
            res.redirect("/pages/login");
      }
})


//for cart
route.get("/cart",(_req,res)=>{
      res.render('cart')
})


//for product 

route.get('/product',db.verify,(req,res)=>{
      db.getAllProduct()
      .then((product)=>{
      res.render('Product',{product})
      })
      .catch((err)=>{
      res.send(err);
    })
  })


route.get("/product_add",db.verify, (_req,res)=>{
      res.render('product_add.hbs');
})

cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
      secure: true,
})

route.post("/pages/product_add",db.verify, async(req,res)=>{
      let samplefile,filepath;
      let file = req.files.samplefile;
 await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                  if (err) return res.send( { message: "cloudnary error", success: false })
            filepath=result.url
            }
      );   
      let user_id=1;
       let today=new  Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
db.addNewProduct(req.body.product_name , req.body.product_type,filepath,user_id,req.body.price,date,req.body.desc)
.then(()=>{
      res.redirect('/pages/product')
     })
     .catch((err)=>{
        res.send(err) 
     })
})



 exports=module.exports={
      route
}