const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];
//UNSPLASH API
const count = 10;
const apiKey = "2tUkfu5pgzzYshdQi_rqHhmXuQPb2pXLMfnTir361yY";

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//helper function to set attributes on dom elements
/* function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
} */
//create elements for links & photos,add to Dom
function displayPhotos() {
  //run function for each object in photosArray
  photosArray.forEach((photo) => {
    // create<a> to link to unsplash
    const item = document.createElement('a');
   /*  setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    }); */
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    //create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    /* setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    }); */
    //put <img> inside <a>, then put both inside image container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
//get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

// on load
getPhotos();
