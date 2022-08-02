const route=require('express').Router();


//for cart
route.get("/",(_req,res)=>{
      console.log("aya haiin");
      res.render('cart')
})


exports=module.exports={
      route
}