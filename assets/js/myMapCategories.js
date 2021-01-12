var myIcon = L.icon({
  iconUrl: '../assets/other/pin01.png',
  iconSize: [27.5, 41],
  iconAnchor: [5, 40],
  popupAnchor: [10, -25],
});

let mapOptions = {}

let prefix = "/pages/";

switch (document.location.pathname) {
  case prefix + "belly.html":
    mapOptions.view = [32.533, -117.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [32.526118, -117.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "breast.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "butt.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "eye.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "face.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "hair.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "nose.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "teeth.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "dominicanRep.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "colombia.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "mexico.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "southKorea.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "thailand.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  case prefix + "turkey.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [3.526118, -17.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [3.526118, 9.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      }
    ];
    break;

  default:

}



var map = L.map('map').setView(mapOptions.view, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let marker of mapOptions.markers) {
  L.marker(marker.latlong, {
      icon: myIcon
    }).addTo(map)
    .bindPopup(marker.title)
}
