const connection=require('./model');

function isUser(email, password){
    console.log(email,password);
    return new Promise(function (reject,resolve){
        connection.query(
            `select * from users where Email='${email}' and password='${password}'`,
            function(err,rows){
                if(err){
                    console.log("aya hain err main");
                    reject(err);
                }
                else{
                    resolve();
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
                   
                    resolve(rows);
                }
            }
        )
    })
}








exports=module.exports={
    addNewPerson,
    isUser,
}