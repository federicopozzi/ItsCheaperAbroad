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
    mapOptions.view = [19.45207519930728, -1.8116567150579195];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [32.526118, -117.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [32.523374791452376, -117.01309590491408],
        title: '<span class="popUpText">Baltic Surgery - Tijuana, Mexico</span>'
      },
      {
        latlong: [7.898500665037002, 98.3679161],
        title: '<span class="popUpText">Plastic Surgery Phuket - Phuket, Thailand</span>'
      },
      {
        latlong: [11.01127471851537, -74.82809605936626],
        title: '<span class="popUpText">Dr. Hernando Pacheco - Baranquilla, Colombia</span>'
      }
    ];
    break;

  case prefix + "breast.html":
    mapOptions.view = [41.010, 28.960];
    mapOptions.zoom = 1;
    mapOptions.markers = [{
        latlong: [18.473983358302632, -69.8967334],
        title: '<span class="popUpText">Dra. Silvia Aviles - Santo Domingo, Dominican Republic</span>'
      },
      {
        latlong: [7.898500665037002, 98.3679161],
        title: '<span class="popUpText">Plastic Surgery Phuket - Phuket, Thailand</span>'
      },
      {
        latlong: [41.06565331567315, 29.001017241413674],
        title: '<span class="popUpText">Estetik International - Istanbul, Turkey</span>'
      },
      {
        latlong: [18.47406276988475, -69.89695504602206],
        title: '<span class="popUpText">Dra. Denia Carpio - Santo Domingo, Dominican Republic</span>'
      },
      {
        latlong: [37.4996, 127.034288],
        title: '<span class="popUpText">Beautique Korea - Seoul, South Korea</span>'
      },
      {
        latlong: [32.526118, -117.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
    ];
    break;

  case prefix + "butt.html":
    mapOptions.view = [41.010, 28.960];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [41.06565331567315, 29.001017241413674],
        title: '<span class="popUpText">Estetik International - Istanbul, Turkey</span>'
      },
      {
        latlong: [18.473983358302632, -69.8967334],
        title: '<span class="popUpText">Dra. Silvia Aviles - Santo Domingo, Dominican Republic</span>'
      },
      {
        latlong: [18.79572628416046, 98.97201133863724],
        title: '<span class="popUpText">Sarinya Clinic (ศรินยา คลินิก) - Chiang Mai, Thailand</span>'
      }
    ];
    break;

  case prefix + "eye.html":
    mapOptions.view = [41.010, 28.960];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [37.5034850514988, 127.02472141630581],
        title: '<span class="popUpText">BGN Eye Clinic Busan - Seoul, South Korea</span>'
      },
      {
        latlong: [37.523433616202034, 127.02794202593883],
        title: '<span class="popUpText">POP整形外科 - Seoul, South Korea</span>'
      },
      {
        latlong: [36.867934712530776, 30.728576437563394],
        title: '<span class="popUpText">Morsia Medical - Antalya, Turkey</span>'
      },
      {
        latlong: [7.036529835292955, -73.06845903863724],
        title: '<span class="popUpText">Dra. Denia Carpio - Santo Domingo, Dominican Republic</span>'
      }
    ];
    break;

  case prefix + "face.html":
    mapOptions.view = [29.66495282917875, 12.82202473508781];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [37.496518048888824, 127.0277505613608],
        title: '<span class="popUpText">Seoul Guide Medical - Seoul, South Korea</span>'
      },
      {
        latlong: [13.72377309366014, 100.56674017582452],
        title: '<span class="popUpText">Nirunda International Aesthetic Clinic (นิรันดาคลินิก) - Bangkok, Thailand</span>'
      },
      {
        latlong: [18.825487130547206, 99.01171333960211],
        title: '<span class="popUpText">Rinrada Clinic CM รินรดา เชียงใหม่ - Pattaya, Chon Buri, Thailand</span>'
      },
      {
        latlong: [18.47406276988475, -69.89695504602206],
        title: '<span class="popUpText">Dra. Denia Carpio - Santo Domingo, Dominican Republic</span>'
      },
      {
        latlong: [36.867934712530776, 30.728576437563394],
        title: '<span class="popUpText">Morsia Medical - Antalya, Turkey</span>'
      }
    ];
    break;

  case prefix + "hair.html":
    mapOptions.view = [22.731460267949362, -44.880591087998454];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [20.68511446997661, -103.39514154502761],
        title: '<span class="popUpText">Hair in 1 Day - Gudalajara, Mexico</span>'
      },
      {
        latlong: [19.357103566905515, -99.18463991505979],
        title: '<span class="popUpText">Clinica DrEO - Mexico City, Mexico</span>'
      },
      {
        latlong: [41.000874008735956, 29.05510727024624],
        title: '<span class="popUpText">Arenamed Hair Clinic - Istanbul, Turkey</span>'
      }
    ];
    break;

  case prefix + "nose.html":
    mapOptions.view = [37.523091480791976, 127.02673587011269];
    mapOptions.zoom = 12;
    mapOptions.markers = [{
        latlong: [37.50544810254444, 127.07881449766033],
        title: '<span class="popUpText">Medictel - Seoul, South Korea</span>'
      },
      {
        latlong: [37.5232105439706, 127.02794862593731],
        title: '<span class="popUpText">JK Plastics - Seoul, South Korea</span>'
      },
      {
        latlong: [37.496518048888824, 127.0277505613608],
        title: '<span class="popUpText">Seoul Guide Medical - Seoul, South Korea</span>'
      },
      {
        latlong: [37.523091480791976, 127.02673587011269],
        title: '<span class="popUpText">MISOODA - Seoul, South Korea</span>'
      },
      {
        latlong: [37.523433616202034, 127.02794202593883],
        title: '<span class="popUpText">POP整形外科 - Seoul, South Korea</span>'
      }
    ];
    break;

  case prefix + "teeth.html":
    mapOptions.view = [32.838796478998574, -44.15307467841153];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [41.010, 28.960],
        title: '<span class="popUpText">Starling Health - Instanbul, Turkey</span>'
      },
      {
        latlong: [6.250197625883222, -75.57088972470223],
        title: '<span class="popUpText">Perfect Smile Experience - Medellín, Colombia</span>'
      },
      {
        latlong: [3.3946519617905495, -76.5413944306804],
        title: '<span class="popUpText">Sonrisa Charry - Valle del Cauca, Colombia</span>'
      },
      {
        latlong: [20.63695910557869, -87.06711544602062],
        title: '<span class="popUpText">Dentex Odontología - Playa del Carmen, Mexico</span>'
      },
      {
        latlong: [36.84733677305643, 28.254776760987284],
        title: '<span class="popUpText">Celebi Dental - Marmaris, Turkey</span>'
      }
    ];
    break;

  case prefix + "dominicanRep.html":
    mapOptions.view = [18.47406276988475, -69.89695504602206];
    mapOptions.zoom = 17;
    mapOptions.markers = [{
        latlong: [18.47406276988475, -69.89695504602206],
        title: '<span class="popUpText">Dra. Denia Carpio - Santo Domingo, Dominican Republic</span>'
      },
      {
        latlong: [18.473983358302632, -69.8967334],
        title: '<span class="popUpText">Dra. Silvia Aviles - Santo Domingo, Dominican Republic</span>'
      }
    ];
    break;

  case prefix + "colombia.html":
    mapOptions.view = [7.036529835292955, -73.06845903863724];
    mapOptions.zoom = 5;
    mapOptions.markers = [{
        latlong: [11.01127471851537, -74.82809605936626],
        title: '<span class="popUpText">Dr. Hernando Pacheco - Baranquilla, Colombia</span>'
      },
      {
        latlong: [3.3946519617905495, -76.5413944306804],
        title: '<span class="popUpText">Sonrisa Charry - Valle del Cauca, Colombia</span>'
      },
      {
        latlong: [7.036529835292955, -73.06845903863724],
        title: '<span class="popUpText">Dr. Felipe Gonzalez - Santander, Colombia</span>'
      }
    ];
    break;

  case prefix + "mexico.html":
    mapOptions.view = [26.68511446997661, -103.39514154502761];
    mapOptions.zoom = 4;
    mapOptions.markers = [{
        latlong: [32.526118, -117.02126],
        title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
      },
      {
        latlong: [32.523374791452376, -117.01309590491408],
        title: '<span class="popUpText">Baltic Surgery - Tijuana, Mexico</span>'
      },
      {
        latlong: [20.63695910557869, -87.06711544602062],
        title: '<span class="popUpText">Dentex Odontología - Playa del Carmen, Mexico</span>'
      },
      {
        latlong: [20.68511446997661, -103.39514154502761],
        title: '<span class="popUpText">Hair in 1 Day - Gudalajara, Mexico</span>'
      },
      {
        latlong: [19.357103566905515, -99.18463991505979],
        title: '<span class="popUpText">Clinica DrEO - Mexico City, Mexico</span>'
      }
    ];
    break;

  case prefix + "southKorea.html":
    mapOptions.view = [37.52, 127.0277505613608];
    mapOptions.zoom = 12;
    mapOptions.markers = [{
        latlong: [37.50544810254444, 127.07881449766033],
        title: '<span class="popUpText">Medictel - Seoul, South Korea</span>'
      },
      {
        latlong: [37.5232105439706, 127.02794862593731],
        title: '<span class="popUpText">JK Plastics - Seoul, South Korea</span>'
      },
      {
        latlong: [37.496518048888824, 127.0277505613608],
        title: '<span class="popUpText">Seoul Guide Medical - Seoul, South Korea</span>'
      },
      {
        latlong: [37.523091480791976, 127.02673587011269],
        title: '<span class="popUpText">MISOODA - Seoul, South Korea</span>'
      },
      {
        latlong: [37.523433616202034, 127.02794202593883],
        title: '<span class="popUpText">POP整形外科 - Seoul, South Korea</span>'
      },
      {
        latlong: [37.5034850514988, 127.02472141630581],
        title: '<span class="popUpText">BGN Eye Clinic Busan - Seoul, South Korea</span>'
      },
      {
        latlong: [37.4996, 127.034288],
        title: '<span class="popUpText">Beautique Korea - Seoul, South Korea</span>'
      }
    ];
    break;

  case prefix + "thailand.html":
    mapOptions.view = [13.72377309366014, 100.56674017582452];
    mapOptions.zoom = 4;
    mapOptions.markers = [{
        latlong: [7.898500665037002, 98.3679161],
        title: '<span class="popUpText">Plastic Surgery Phuket - Phuket, Thailand</span>'
      },
      {
        latlong: [18.79572628416046, 98.97201133863724],
        title: '<span class="popUpText">Sarinya Clinic (ศรินยา คลินิก) - Chiang Mai, Thailand</span>'
      },
      {
        latlong: [13.72377309366014, 100.56674017582452],
        title: '<span class="popUpText">Nirunda International Aesthetic Clinic (นิรันดาคลินิก) - Bangkok, Thailand</span>'
      },
      {
        latlong: [18.825487130547206, 99.01171333960211],
        title: '<span class="popUpText">Rinrada Clinic CM รินรดา เชียงใหม่ - Pattaya, Chon Buri, Thailand</span>'
      }
    ];
    break;

  case prefix + "turkey.html":
    mapOptions.view = [39.06565331567315, 29.001017241413674];
    mapOptions.zoom = 5;
    mapOptions.markers = [{
        latlong: [41.06565331567315, 29.001017241413674],
        title: '<span class="popUpText">Estetik International - Istanbul, Turkey</span>'
      },
      {
        latlong: [41.010, 28.960],
        title: '<span class="popUpText">Starling Health - Instanbul, Turkey</span>'
      },
      {
        latlong: [36.84733677305643, 28.254776760987284],
        title: '<span class="popUpText">Celebi Dental - Marmaris, Turkey</span>'
      },
      {
        latlong: [36.867934712530776, 30.728576437563394],
        title: '<span class="popUpText">Morsia Medical - Antalya, Turkey</span>'
      },
      {
        latlong: [41.000874008735956, 29.05510727024624],
        title: '<span class="popUpText">Arenamed Hair Clinic - Istanbul, Turkey</span>'
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