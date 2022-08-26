const db=require('../db/productModel');
const cloudinary= require("cloudinary").v2
const path=require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') })



function getAllProduct(req,res){
db.getAllProduct().then((products)=>{
   // console.log(products);
   res.render('product',{products}); 
   })
   .catch((err)=>{
      res.send(err) 
   })
}


function productAdd(req,res){
    res.render('product_add');
}

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.CLOUD_API_KEY,
   api_secret: process.env.CLOUD_API_SECRET,
   secure: true,
})

async function addNewProduct(req,res){
    let samplefile,filepath;
    let file = req.files.samplefile;
await cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                if (err) return res.send( { message: "cloudnary error", success: false })
          filepath=result.url
          }
    );   
    let user_id=req.user.user_id;
     let today=new  Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
db.addNewProduct(req.body.product_name , req.body.product_type,filepath,user_id,req.body.price,date,req.body.desc)
.then(()=>{
    res.redirect('/product')
   })
   .catch((err)=>{
      res.send(err) 
   })
}



   exports=module.exports={
           getAllProduct,
           productAdd,
           addNewProduct
   }