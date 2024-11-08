const imageAlbums = [
    { title: 'flowers Views', genre: 'flowers', images: ['flowers-white-small.jpg', 'flowers-pink-small.jpg', 'flowers-purple-small.jpg', 'flowers-yellow-small.jpg', 'flowers-red-small.jpg'] },
    { title: 'Cityscapes', genre: 'urban', images: ['city1.jpg', 'city2.jpg'] },
    { title: 'Rock Concert', genre: 'rock', images: ['concert1.jpg', 'concert2.jpg'] },
    { title: 'Beach Vibes', genre: 'beach', images: ['beach1.jpg', 'beach2.jpg'] },
    { title: 'Classic Rock', genre: 'rock', images: ['classic1.jpg', 'classic2.jpg'] }
];
const pictures = document.getElementById('pictures');
const selectedAlbum = document.getElementById('thumbnails');
const smallImage = document.getElementById('smallImage');
const largeImage = document.getElementById('Large');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

// Enlarge image function
function EnlargeImg(image) {
    // Get the file name from the image element's source
    const imageSrc = image.src;
    largeImage.setAttribute('src', `${imageSrc.replace('small', 'large')}`);
    largeImage.setAttribute('width', '1200');
    largeImage.setAttribute('height', '800');
    largeImage.style.display = 'flex';
}

// Show the thumbnails (album) when the "pictures" container is clicked
function albums() {
    selectedAlbum.style.display = 'flex';
}

// Event listener to show the album
pictures.addEventListener('click', albums);

// Event listeners for each image to enlarge them
img1.addEventListener('click', () => EnlargeImg(img1));
img2.addEventListener('click', () => EnlargeImg(img2));
img3.addEventListener('click', () => EnlargeImg(img3));
img4.addEventListener('click', () => EnlargeImg(img4));
img5.addEventListener('click', () => EnlargeImg(img5));
