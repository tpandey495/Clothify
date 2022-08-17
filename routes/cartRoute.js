const route=require('express').Router();
const controller=require('../controller/cartController');

//for cart
route.get("/",controller.cartview);

//route.post
route.post("/cartadd",controller.cartadd);

exports=module.exports={
      route
}
