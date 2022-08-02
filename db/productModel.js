const connection=require('./model');

// for product table

function getAllProduct(){
    return new Promise(function (resolve,reject){
        connection.query(
            `select * From product`,
            function(err,rows,cols){
                if(err){
                    reject(err);
                }
                else{
                    resolve(rows);
                }
            }
        )
})
}

//add new product

function addNewProduct(name,product_type,imgurl,user_id,price,Date,Description){
    return new Promise(function (resolve,reject){
           connection.query(
               `INSERT INTO product(name,type,imgurl,user_id,price,Date,Description) values(?,?,?,?,?,?,?)`,
               [name,product_type,imgurl,user_id,price,Date,Description],
               function(err,rows,cols){
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve();
                   }
               }
           )
       })
   }

module.exports={
    getAllProduct,
    addNewProduct
  }












