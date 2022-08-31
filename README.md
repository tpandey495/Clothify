# Simple Ecommerce Website Template

## Responsive E-commerce Website  template containing catalog, filters, product page, shopping cart and other elements of the online store.

### Technologies
HTML </br>
CSS  </br>
Javascript </br>
Node js <br/>
Express js <br/>


## Project Structure
```
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── views              HTML files for static part of site
├── public              js/css files for static part of site
└── routes              # express middlewares (route wise)
├── middleware              middleware  for autherizating user
```

## Business Logic 

### userController

1. **register** 
    This will create a new user with a random username and will encrypt the password using bycrypt.js

2. **isUser**
This will check whehter user id and password right or not.

### productController

1. **getAllProduct**
To get all product from the database

2. **addNewProduct**
To add new product  to database

### cartModel
1. **addProducttocart**
To add new product  to cart









