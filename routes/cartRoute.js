const route=require('express').Router();
const controller=require('../controller/cartController');
const auth=require("../middleware/auth");

//for cart
route.get("/",auth.verify,controller.cartview);

//route.post
route.post("/cartadd",auth.verify,controller.cartadd);

exports=module.exports={
      route
}
