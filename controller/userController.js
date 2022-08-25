const db=require('../db/userModel');
var bcrypt = require('bcryptjs');


//api for registration
function register(_req,res){
    res.render('person_add')
}


async function register1(req,res){
    const password=req.body.password;
    //encryptig password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
                  if(err){
                    console.log(err);
                  }
                else{
                    db.addNewPerson(req.body.Email,req.body.Name,req.body.Phone, hash)
                 .then(()=>{
                res.redirect('/user/login')
          })
          .catch((err)=>{
             res.send(err) 
          })  
                }
        });
    });
}


//login

function tologin(req,res){
    res.render('login');
}



  
async function compare(password, hashed) {
  const match = await bcrypt.compare(password, hashed)
  return match
}

  function  isUser(req,res){
    let {email, password } = req.body;
     db.isUser(email).then(async(dbpass)=>{
      console.log(dbpass);
    const match=await compare(password, dbpass);
    if(match){
      res.redirect("/product")
    }
else{
  res.send("wrong credentials");
}
  }).catch((err)=>{
res.send("user does'nt exist");
  })
}






exports=module.exports={
  register,
  register1,
  tologin,
  isUser
}