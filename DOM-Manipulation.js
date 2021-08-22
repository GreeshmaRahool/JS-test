let images = ['image1.jpg', 'image2.jpg', 'image3.jpg']
const getImageRandom = () => {   
    let randomImages = Math.floor(Math.random() * images.length);
    return images[randomImages];
}

const button = document.createElement('button');
button.innerHTML= 'Click me'
const body = document.querySelector('body');
body.appendChild(button);
button.addEventListener('click', () => {
    const image = document.createElement('img');
    image.src = getImageRandom();
    body.appendChild(image);
});

