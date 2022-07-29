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


// connection.query(`CREATE database inventory`,function(err,rows,cols){
//         if(err){
//             console.log(err);
//         }
//         else{
//            console.log(rows);
//         }
//     }
// )

// connection.query(`use inventory`,function(err,rows,cols){
//     if(err){
//         console.log(err);
//     }
//     else{
//        console.log(rows);
//     }
// }
// )

// connection.query(`CREATE TABLE users (
// 	user_id INT NOT NULL AUTO_INCREMENT UNIQUE,
// 	Email varchar(30) NOT NULL UNIQUE,
// 	Name varchar(30) NOT NULL,
// 	Phone varchar(15) NOT NULL,
// 	password varchar(200) NOT NULL,
// 	PRIMARY KEY (user_id)
// )`,function(err,rows,cols){
//         if(err){
//             console.log(err);
//         }
//         else{
//            console.log(rows);
//         }
//     }
// )

// connection.query(`CREATE TABLE product (
// 	Pro_id INT NOT NULL AUTO_INCREMENT,
// 	name varchar(20) NOT NULL,
// 	type varchar(255) NOT NULL,
// 	imgurl varchar(1500) NOT NULL,
// 	user_id INT NOT NULL,
// 	price FLOAT NOT NULL,
// 	Date DATE NOT NULL,
// 	Description varchar(10000) NOT NULL,
// 	PRIMARY KEY (Pro_id)
// );`,function(err,rows,cols){
//         if(err){
//             console.log(err);
//         }
//         else{
//            console.log(rows);
//         }
//     }
// )

//  connection.query("select * from product", (err, result)=>{
//          if(err)console.log(err);
//      else console.log(result)
// })

function addNewPerson(Email,Name,Phone,password){
    console.log(Email,Name,Phone,password);
    return new Promise(function (resolve,reject){
        connection.query(
            `INSERT INTO users (Email,Name,Phone, password) values(?,?,?,?)`,
            [Email,Name,Phone, password],
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

function isUser(email, password){
    return new Promise(function (resolve,reject){
        connection.query(
            `select * from users where Email='${email}' and password='${password}'`,
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



const verify = async(req, res, next)=>{
    const token = req.session.token
   if (token == null) return res.redirect("/pages/login")
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        console.log(err)
    if (err) return res.sendStatus(403)
        console.log(user)
        req.user = user
      next()
      })
}


module.exports={
  addNewPerson,
  getAllProduct,
  addNewProduct,
  isUser,
  verify
}