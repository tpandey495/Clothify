const route=require('express').Router();
const controller=require('../controller/productController');
const auth=require("../middleware/auth");

route.get('/',controller.getAllProduct);
route.get("/product_add",auth.verify,controller.productAdd);
route.post("/product_add",auth.verify,controller.addNewProduct);


exports=module.exports={
    route
}