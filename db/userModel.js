const connection=require('./model');



connection.query(`select * from users`,function(err,rows,cols){
    if(err){
        console.log(err);
    }
    else{
        console.log(rows);
    }
  });




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


function addNewPerson(Email,Name,Phone,password){
    
    return new Promise(function (resolve,reject){
        connection.query(
            `INSERT INTO users (Email,Name,Phone, password) values(?,?,?,?)`,
            [Email,Name,Phone,password],
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


exports=module.exports={
    addNewPerson,
    isUser
}