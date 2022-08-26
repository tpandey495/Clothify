function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTime() {
    setInterval(displayNextImage, 10000);
}

var images = [], x = -1;
images[0] = "/img/blog-3.jpg";
images[1] = "/img/girlshop4.jpg";
images[2] = "/img/kid1.png";








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