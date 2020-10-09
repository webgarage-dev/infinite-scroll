/* Uses private API */
const apiURL = `https://api.webgarage.dev/uninfscroll/photos/get`;

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