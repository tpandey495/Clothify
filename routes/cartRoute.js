const route=require('express').Router();


//for cart
route.get("/",(_req,res)=>{
      res.render('cart')
})


exports=module.exports={
      route
}
