const route=require('express').Router();
const controller=require('../controller/productController');


route.get('/',controller.getAllProduct);
route.get("/product_add",controller.productAdd);
route.post("/product_add", controller.addNewProduct);


exports=module.exports={
    route
}