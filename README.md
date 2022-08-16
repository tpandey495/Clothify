# Simple Ecommerce Website Template

## Responsive E-commerce Website  template containing catalog, filters, product page, shopping cart and other elements of the online store.

### Technologies
HTML </br>
CSS  </br>
Javascript </br>
Node js <br/>
Express js <br/>
Handlebars <br/>
Mysql <br />

## Database Setup
```
Write the mysql database credentials  in env file 
```
### 


## Project Structure

### Frontend 
```
cart.hbs   #diffrent page
    login.hbs          
    person_add.hbs  
    Product.hbs
    product_add.hbs

+---css              #contain css file for diffrent pages
|       add.css      #css for product_add page
|       cart.css     #css for cart page
|       home.css     #css for home page
|       login.css    #css for login page
|       product.css  #css for product page
|
\---img
        girlshop4.jpg   #carousel image
```

## Backend 

```
+---routes
|       cartRoute.js
|       productRoute.js
|       userRoute.js

+---controller
|       cartController.js
|       productController.js
|       userController.js

+---db     /
|       model.js
|       productModel.js
|       userModel.js
```


![screencapture-localhost-5501-home-html-2021-09-03-17_27_05](https://user-images.githubusercontent.com/67863031/132003833-01597545-78eb-4b4d-bc8f-ad6ae854dbf0.png)




![screencapture-localhost-5501-cart-html-2021-09-03-17_46_47](https://user-images.githubusercontent.com/67863031/132004065-528c348b-f914-4810-9df2-0b17829d39d4.png)




