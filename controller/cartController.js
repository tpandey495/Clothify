const db=require('../db/cartModel');


function cartview(_req,res){
    db.getProductfromcart().then((carts)=>{
        console.log(carts);
        res.render('cart',{carts});
    }).catch((err)=>{
        res.send({message:"err"+err});
    })
}


function cartadd(req,res){
    console.log(req.body.answer);
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