function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((coords) => {
                resolve(coords);
            });
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    })
}

getLocation().then((coords) => {
    console.log(coords);
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: coords.coords.latitude, lng: coords.coords.longitude},
        zoom: 8
    });
    new google.maps.Marker({
        position: new google.maps.LatLng(coords.coords.latitude - 0, coords.coords.longitude - 0),
        icon: {
            url: "./img/icon.png",
            size: new google.maps.Size(128, 128)
        },
        map: map
    });
});