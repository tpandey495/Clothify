const connection=require('./model');
const product=require('./productModel');

function getProductfromcart(user_id){
return new Promise(function(resolve,reject){
connection.query(`select * from product JOIN cart ON  product.Pro_id=cart.pro_id AND cart.user_id=${user_id}`,function(err,rows){
   if(err){
    reject(err);
  }
 else{
  const obj={
    length:rows.length
  }
     rows.push(obj);
     resolve(rows);
  }
   })
  })
}


function addProducttocart(pro_id,user_id){
    const date=new Date();
    const year=date.getFullYear();
    const month=date.getMonth();
    const day =date.getDate();
    const finaldate=`${year}-${month}-${day}`;
    console.log(pro_id,user_id,finaldate);
    return new Promise(function(resolve,reject){
      connection.query(`INSERT INTO cart (pro_id,user_id,Date) values(?,?,?)`,[pro_id,user_id,finaldate],function(err,rows){
    if(err){
        reject(err);
    }
    else{
        resolve(rows);
    }
})
 })
}



exports=module.exports={
    addProducttocart,
    getProductfromcart
}
