const route=require('express').Router();
const path=require('path');
const db=require('../db/productModel');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') })


const cloudinary= require("cloudinary").v2

cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
      secure: true,
})

//for product 

route.get('/',(req,res)=>{
    db.getAllProduct()
    .then((product)=>{
    res.render('Product',{product})
    })
    .catch((err)=>{
    res.send(err);
  })
})


route.get("/product_add", (_req,res)=>{
      res.render('product_add.hbs');
})



route.post("/product_add", async(req,res)=>{
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
      res.redirect('/product')
     })
     .catch((err)=>{
        res.send(err) 
     })
})




exports=module.exports={
    route
}