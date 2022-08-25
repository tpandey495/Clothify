const connection=require('./model');





 function isUser(email){
    return new Promise(function(resolve,reject){
    connection.query(
                `select * from users where email='${email}'`,
                 (err, rows) => {
        if (err) {
          reject(err);
        }
        else {
            if(rows.length>0){
                var dbpass;
                dbpass=rows[0].password;
                resolve(rows[0]);
            }
         else{
            reject("user does'nt exist")
         }
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