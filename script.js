/* Uses private API */
const apiURL = `https://api.webgarage.dev/uninfscroll/photos/get`;

/* HTML elements*/
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

/* Global Photo Array */
let photosArray = [];

/* Create elements for links and photos and add to DOM */
function displayPhotos() {
    photosArray.forEach(photo => {
        const item = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_blank");
        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

/* Get photos from Unsplash API */
function getPhotos() {
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            photosArray = data;
            displayPhotos();
        })
        .catch(function (error) {
            console.log("Something goes wrong..."+error);
        })
}

getPhotos();