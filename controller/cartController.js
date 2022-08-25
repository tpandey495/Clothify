const db=require('../db/cartModel');


function cartview(_req,res){
    db.getProductfromcart().then((carts)=>{
       res.render('cart',{carts});
    }).catch((err)=>{
        res.send({message:"err"+err});
    })
}


function cartadd(req,res){
    db.addProducttocart(req.body.answer)
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