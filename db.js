const mysql=require('mysql2');
require('dotenv').config()
const jwt = require("jsonwebtoken");

const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABSE
})

// connection.query("select * from product", (err, result)=>{
//     if(err)console.log(err);
//     else console.log(result)
// })

// connection.query(`describe users`,(err,res)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// })

// connection.query(`use inventory`,(err,res)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// })





    

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





// const verify = async(req, res, next)=>{
//     const token = req.session.token
//    if (token == null) return res.redirect("/pages/login")
//     jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//         console.log(err)
//     if (err) return res.sendStatus(403)
//         console.log(user)
//         req.user = user
//       next()
//       })
// }


module.exports={
  addNewPerson,
  getAllProduct,
  addNewProduct,
  isUser
//   ,
//   verify
}