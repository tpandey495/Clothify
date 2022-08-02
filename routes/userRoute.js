const route=require('express').Router();
const db=require('../db/userModel');



//api for registration

route.get("/register",(_req,res)=>{
        res.render('person_add')
})
    
    
route.post("/register",(req,res)=>{
      console.log(req.body);
db.addNewPerson(req.body.Email,req.body.Name,req.body.Phone, req.body.password)
    .then(()=>{
       res.redirect('/user/login')
      })
      .catch((err)=>{
         res.send(err) 
      })
})



// user login 

route.get("/login",(_req,res)=>{
      res.render('login');
})


route.post("/login", async(req,res)=>{
      console.log(req.body)
      let { username, password } = req.body;
      const isUser = await db.isUser(username, password);
      if(isUser.length != 0 && isUser[0]){
          res.redirect(`/product/`)
      }     
      else{
            res.redirect("/user/login");
      }
})
  

exports=module.exports={
      route
}