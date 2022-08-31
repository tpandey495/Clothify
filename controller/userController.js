const db=require('../db/userModel');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path=require('path');
const session = require('cookie-session');
dotenv.config({ path: path.resolve(__dirname, '../.env') })

//api for registration
function registerview(_req,res){
    res.render('person_add')
}


async function register(req,res){
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
     db.isUser(email).then(async(rows)=>{
    const match=await compare(password, rows.password);
    if(match){
   console.log(rows.user_id);
   var token=jwt.sign({user_id:rows.user_id},'SECRET', { expiresIn: '1h' });
   res.cookie("token",token);
   res.redirect(`/product/?valid=${token}`)
    } 
else{
  res.send("wrong credentials");
}
  }).catch((err)=>{
res.send("user does'nt exist");
  })
}






exports=module.exports={
  registerview,
  register,
  tologin,
  isUser
}