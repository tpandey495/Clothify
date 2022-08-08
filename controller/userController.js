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


function isUser(req,res){
      let { username, password } = req.body;
    const isUser = db.isUser(username, password).then()
    console.log(isUser);
    if(isUser.length != 0 && isUser[0]){
        res.redirect(`/product/`)
    }     
    else{
          res.redirect("/user/login");
    }
}



exports=module.exports={
  register,
  register1,
  tologin,
  isUser
}