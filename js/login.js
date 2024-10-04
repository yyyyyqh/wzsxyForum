const backgroundImages = [
    '../img/Hippopx1.jpg',
    '../img/Hippopx2.jpg',
    '../img/Hippopx3.jpg',
    '../img/Hippopx4.jpg'
];

window.onload = function () {
    setRandomBackground();
};

function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];
    document.body.style.backgroundImage = `url(${selectedImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
}

document.getElementById('myButton').addEventListener('click', function () {
    window.open("test2.html", "_blank");

   });