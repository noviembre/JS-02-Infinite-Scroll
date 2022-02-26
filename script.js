const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];
//UNSPLASH API
const count = 10;
const apiKey = '2tUkfu5pgzzYshdQi_rqHhmXuQPb2pXLMfnTir361yY';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    /* displayPhotos(); */
  } catch (error) {
    //cath error here
  }
}

// on load
getPhotos();
