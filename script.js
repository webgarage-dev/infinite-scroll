const imageCount = 10;
const apiKey = '';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}`;

function getPhotos() {
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

        })
        .catch(function (error) {

        })
}

getPhotos();