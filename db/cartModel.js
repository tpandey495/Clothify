const connection=require('./Model');
const product=require('./productModel');

function getProductfromcart(){
return new Promise(function(resolve,reject){
connection.query(`select * from product JOIN cart ON  product.Pro_id=cart.product_id`,function(err,rows){
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


function addProducttocart(id){
   const pro_id=id;
    const user_id=1;
    const date=new Date();
    const year=date.getFullYear();
    const month=date.getMonth();
    const day =date.getDate();
    const finaldate=`${year}-${month}-${day}`;
    console.log(pro_id,user_id,finaldate);
    return new Promise(function(resolve,reject){
      connection.query(`INSERT INTO cart (product_id,user_id,Date) values(?,?,?)`,[pro_id,user_id,finaldate],function(err,rows){
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