//UNSPLASH API
const count= 10;
const apiKey='2tUkfu5pgzzYshdQi_rqHhmXuQPb2pXLMfnTir361yY';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//get photos from unsplash API
async function getPhotos() {
    try {      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
    
    }
}
// on load
getPhotos();
