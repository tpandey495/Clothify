const db=require('../db/cartModel');
const auth=require("../middleware/auth");

function cartview(req,res){
    db.getProductfromcart(req.user.user_id).then((carts)=>{
       res.render('cart',{carts});
    }).catch((err)=>{
        res.send({message:"err"+err});
    })
}


function cartadd(req,res){
    db.addProducttocart(req.body.answer,req.user.user_id)
    .then(()=>{
       res.redirect('/cart');
    }).catch((err)=>{
        res.send(err);
    })
}


module.exports={
    cartview,
    cartadd
}