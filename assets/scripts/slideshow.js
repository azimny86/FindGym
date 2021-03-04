// Slideshow

var slides = ['assets/photo/slideshow/slide1.jpg','assets/photo/slideshow/slide2.jpg','assets/photo/slideshow/slide3.jpg','assets/photo/slideshow/slide4.jpg','assets/photo/slideshow/slide5.jpg'];

var i = 0;
function slideshow() {
    document.getElementById("slide").src = slides[i];
    i++;
    if(i>4) {
        i=0
    }
}
setInterval(slideshow,3000)
