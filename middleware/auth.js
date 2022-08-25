const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const path=require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env')});



const verify = async(req, res, next)=>{
    const token = req.cookies.token;
   if (token == null) 
   return res.redirect("/user/login")
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
    return res.redirect("/user/login")
    }
    else{
        console.log(user)
        req.user = user
    }
      next()
      })
}


exports=module.exports={
    verify
}