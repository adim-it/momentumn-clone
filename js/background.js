const images = ["1.jpg","2.jpg","3.jpg"];
const image = images[Math.floor(Math.random() * images.length)];
const bgImage = document.querySelector('#background')

bgImage.style.background = `url("image/${image}")  center no-repeat`

