const db=require('../db/userModel');


//api for registration
function register(_req,res){
    res.render('person_add')
}


function register1(req,res){
     db.addNewPerson(req.body.Email,req.body.Name,req.body.Phone, req.body.password)
        .then(()=>{
           res.redirect('/user/login')
          })
          .catch((err)=>{
             res.send(err) 
          })
}


//login

function tologin(req,res){
    res.render('login');
}


 function  isUser(req,res){
      let { username, password } = req.body;
     db.isUser(username, password).then(()=>{
       res.redirect('/user/product'); 
    }).then(()=>{
        res.redirect('/user');
    }).catch((err)=>{
        console.log(err);
       res.redirect('/user/prduct');
       })
    }



exports=module.exports={
  register,
  register1,
  tologin,
  isUser
}