/* Uses private API */
const apiURL = `https://api.webgarage.dev/uninfscroll/photos/get`;

/* HTML elements*/
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

/* Global Photo Array */
let photosArray = [];

function getPhotos() {
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            photosArray = data;
        })
        .catch(function (error) {

        })
}

getPhotos();