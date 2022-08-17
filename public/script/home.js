 async function postData(url = '', data = {}) {
        const response = await fetch(url, {
        method: 'POST', 
        headers: {
         'Content-Type': 'application/json'
         },
        body: JSON.stringify(data) 
        });
            return response.json(); 
   }

   

async  function addtocart(id){
console.log(id);
const response=await postData('/cart/cartadd', { answer: id});
console.log(response);
}