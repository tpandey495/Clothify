const mysql=require('mysql2');
const dotenv = require('dotenv');
const path=require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') })


const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABSE
})



connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
     console.log('connected as id ' + connection.threadId);
  });

 

connection.query(`CREATE TABLE  IF NOT EXISTS users(
	user_id INT NOT NULL AUTO_INCREMENT UNIQUE,
	Email varchar(30) NOT NULL UNIQUE,
	Name varchar(30) NOT NULL,
	Phone varchar(15) NOT NULL,
	password varchar(200) NOT NULL,
	PRIMARY KEY (user_id)
)`,function(err,rows,cols){
        if(err){
            console.log(err);
        }
        else{
           console.log(rows);
        }
    }
)

connection.query(`CREATE TABLE  IF NOT EXISTS product(
	Pro_id INT NOT NULL AUTO_INCREMENT,
	name varchar(20) NOT NULL,
	type varchar(255) NOT NULL,
	imgurl varchar(1500) NOT NULL,
	user_id INT NOT NULL,
	price FLOAT NOT NULL,
	Date DATE NOT NULL,
	Description varchar(10000) NOT NULL,
	PRIMARY KEY (Pro_id)
);`,function(err,rows,cols){
        if(err){
            console.log(err);
        }
        else{
           console.log(rows);
        }
    }
)

connection.query(`CREATE TABLE  IF NOT EXISTS cart(
	Pro_id INT NOT NULL,
	user_id INT NOT NULL,
	Date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT cart_info UNIQUE(pro_id,user_id)
);`,function(err,rows,cols){
        if(err){
            console.log(err);
        }
        else{
           console.log(rows);
        }
    }
)
 
  

module.exports=connection



