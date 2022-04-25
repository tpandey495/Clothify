  
//logic to change carousel on image
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementsByClassName("carousel-img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("carousel-img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 1000);
}

var images = [], x = -1;

images[0] = "img/girlshop4.jpg";
images[1] = "img/men2.png";
images[2] = "img/kid1.png";