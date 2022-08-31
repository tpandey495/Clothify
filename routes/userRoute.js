const route=require('express').Router();
const controller=require('../controller/userController');


route.get("/register",controller.registerview);
route.post("/register",controller.register);
route.get("/login",controller.tologin);
route.post("/login",controller.isUser);



exports=module.exports={
      route
}