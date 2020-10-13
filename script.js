/* Uses private API */
const apiURL = `https://api.webgarage.dev/uninfscroll/photos/get`;

/* HTML elements*/
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

/* Global Photo Array */
let photosArray = [];

/* Set up attributes for element*/
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

/* Create elements for links and photos and add to DOM */
function displayPhotos() {
    photosArray.forEach(photo => {
        const item = document.createElement("a");
        const img = document.createElement("img");
        setAttributes(
            item,
            {
                "href": photo.links.html,
                "target": "_blank"
            });
        setAttributes(
            img,
            {
                "src": photo.urls.regular,
                "alt": photo.alt_description,
                "title": photo.alt_description
            });
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