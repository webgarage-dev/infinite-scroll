/* Uses private API */
const apiURL = `https://api.webgarage.dev/uninfscroll/photos/get/30`;

/* HTML elements*/
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

/* Global Photo Array */
let photosArray = [];

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;


/* Set up listener for every image */
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

/* Set up attributes for element*/
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

/* Create elements for links and photos and add to DOM */
function displayPhotos() {
    totalImages = photosArray.length;
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
        img.addEventListener("load", imageLoaded)
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

/* Set up listener for scroll event */
window.addEventListener("scroll", () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1000) && ready) {
        ready = false;
        imagesLoaded = 0;
        getPhotos();
    }
});

getPhotos();