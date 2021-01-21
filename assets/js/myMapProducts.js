let myIcon = L.icon({
  iconUrl: '../assets/svg/map/pin01.png',
  iconSize: [27.5, 41],
  iconAnchor: [5, 40],
  popupAnchor: [10, -25],
});

let mapOptions = {}

let prefix = document.location.hostname === "federicopozzi.github.io" ? "/phase3/pages/" : "/phase3/pages/";

switch (document.location.pathname) {
  case prefix + "bellyOp01.html":
    mapOptions.view = [35, -100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [32.523374791452376, -117.01309590491408],
      title: '<span class="popUpText"><a href="" target="_blank"> Surgery - Tijuana, Mexico</a></span>'
    }];
    break;

  case prefix + "bellyOp02.html":
    mapOptions.view = [35, -100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [32.523374791452376, -117.01309590491408],
      title: '<span class="popUpText">Baltic Surgery - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "bellyOp03.html":
    mapOptions.view = [12, 100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [7.898500665037002, 98.3679161],
      title: '<span class="popUpText">Plastic Surgery Phuket - Phuket, Thailand</span>'
    }];
    break;

  case prefix + "bellyOp04.html":
    mapOptions.view = [10, -80];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [11.01127471851537, -74.82809605936626],
      title: '<span class="popUpText">Dr. Hernando Pacheco - Baranquilla, Colombia</span>'
    }];
    break;

  case prefix + "bellyOp05.html":
    mapOptions.view = [10, -80];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [11.01127471851537, -74.82809605936626],
      title: '<span class="popUpText">Dr. Hernando Pacheco - Baranquilla, Colombia</span>'
    }];
    break;

  case prefix + "bellyOp06.html":
    mapOptions.view = [35, -100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [32.526118, -117.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "breastOp01.html":
    mapOptions.view = [35, 120];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [37.4996, 127.034288],
      title: '<span class="popUpText">Beautique Korea - Seoul, South Korea</span>'
    }];
    break;

  case prefix + "breastOp02.html":
  mapOptions.view = [12, 100];
  mapOptions.zoom = 3;
  mapOptions.markers = [{
    latlong: [7.898500665037002, 98.3679161],
    title: '<span class="popUpText">Plastic Surgery Phuket - Phuket, Thailand</span>'
  }];
  break;

  case prefix + "breastOp03.html":
    mapOptions.view = [45, 25];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [41.06565331567315, 29.001017241413674],
      title: '<span class="popUpText">Estetik International - Istanbul, Turkey</span>'
    }];
    break;

  case prefix + "breastOp04.html":
    mapOptions.view = [20, -50];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [18.47406276988475, -69.89695504602206],
      title: '<span class="popUpText">Dra. Denia Carpio - Santo Domingo, Dominican Republic</span>'
    }];
    break;

  case prefix + "breastOp05.html":
    mapOptions.view = [20, -50];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [18.473983358302632, -69.8967334],
      title: '<span class="popUpText">Dra. Silvia Aviles - Santo Domingo, Dominican Republic</span>'
    }];
    break;

  case prefix + "breastOp06.html":
    mapOptions.view = [35, -100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [32.526118, -117.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "buttOp01.html":
  mapOptions.view = [20, -50];
  mapOptions.zoom = 3;
  mapOptions.markers = [{
    latlong: [18.473983358302632, -69.8967334],
    title: '<span class="popUpText">Dra. Silvia Aviles - Santo Domingo, Dominican Republic</span>'
  }];
  break;

  case prefix + "buttOp02.html":
    mapOptions.view = [20, 100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [18.79572628416046, 98.97201133863724],
      title: '<span class="popUpText">Sarinya Clinic (ศรินยา คลินิก) - Chiang Mai, Thailand</span>'
    }];
    break;

  case prefix + "buttOp03.html":
  mapOptions.view = [45, 25];
  mapOptions.zoom = 3;
  mapOptions.markers = [{
    latlong: [41.06565331567315, 29.001017241413674],
    title: '<span class="popUpText">Estetik International - Istanbul, Turkey</span>'
  }];
  break;

  case prefix + "buttOp04.html":
  mapOptions.view = [45, 25];
  mapOptions.zoom = 3;
  mapOptions.markers = [{
    latlong: [41.06565331567315, 29.001017241413674],
    title: '<span class="popUpText">Estetik International - Istanbul, Turkey</span>'
  }];
  break;

  case prefix + "eyeOp01.html":
  mapOptions.view = [20, -50];
  mapOptions.zoom = 3;
  mapOptions.markers = [{
    latlong: [18.47406276988475, -69.89695504602206],
    title: '<span class="popUpText">Dra. Denia Carpio - Santo Domingo, Dominican Republic</span>'
  }];
  break;

  case prefix + "eyeOp02.html":
    mapOptions.view = [40, 120];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [37.5034850514988, 127.02472141630581],
      title: '<span class="popUpText">BGN Eye Clinic Busan - Seoul, South Korea</span>'
    }];
    break;

  case prefix + "eyeOp03.html":
    mapOptions.view = [40, 120];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [37.523433616202034, 127.02794202593883],
      title: '<span class="popUpText">POP整形外科 - Seoul, South Korea</span>'
    }];
    break;

  case prefix + "eyeOp04.html":
    mapOptions.view = [38, 25];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [36.867934712530776, 30.728576437563394],
      title: '<span class="popUpText">Morsia Medical - Antalya, Turkey</span>'
    }];
    break;

  case prefix + "eyeOp05.html":
    mapOptions.view = [10, -60];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [7.035789811760819, -73.06833737019],
      title: '<span class="popUpText">Dr. Felipe Gonzalez - Bucamaranga, Colombia</span>'
    }];
    break;

  case prefix + "faceOp01.html":
    mapOptions.view = [20, 100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [18.825487130547206, 99.01171333960211],
      title: '<span class="popUpText">Rinrada Clinic CM รินรดา เชียงใหม่ - Pattaya, Chon Buri, Thailand</span>'
    }];
    break;

  case prefix + "faceOp02.html":
    mapOptions.view = [20, 100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [13.72377309366014, 100.56674017582452],
      title: '<span class="popUpText">Nirunda International Aesthetic Clinic (นิรันดาคลินิก) - Bangkok, Thailand</span>'
    }];
    break;

  case prefix + "faceOp03.html":
  mapOptions.view = [20, -50];
  mapOptions.zoom = 3;
  mapOptions.markers = [{
    latlong: [18.47406276988475, -69.89695504602206],
    title: '<span class="popUpText">Dra. Denia Carpio - Santo Domingo, Dominican Republic</span>'
  }];
  break;

  case prefix + "faceOp04.html":
    mapOptions.view = [40, 120];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [37.49596471735722, 127.02754671818016],
      title: '<span class="popUpText">Seoul Guide Medical - Seoul, South Korea</span>'
    }];
    break;

  case prefix + "faceOp05.html":
  mapOptions.view = [38, 25];
  mapOptions.zoom = 3;
  mapOptions.markers = [{
    latlong: [36.867934712530776, 30.728576437563394],
    title: '<span class="popUpText">Morsia Medical - Antalya, Turkey</span>'
  }];
  break;

  case prefix + "hairOp01.html":
    mapOptions.view = [30, -100];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [20.68511446997661, -103.39514154502761],
      title: '<span class="popUpText">Hair in 1 Day - Gudalajara, Mexico</span>'
    }];
    break;

  case prefix + "hairOp02.html":
    mapOptions.view = [30, -100];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [19.357103566905515, -99.18463991505979],
      title: '<span class="popUpText">Clinica DrEO - Mexico City, Mexico</span>'
    }];
    break;

  case prefix + "hairOp03.html":
    mapOptions.view = [38, 25];
    mapOptions.zoom = 3;
    mapOptions.markers = [{
      latlong: [41.000874008735956, 29.05510727024624],
      title: '<span class="popUpText">Arenamed Hair Clinic - Istanbul, Turkey</span>'
    }];
    break;

  case prefix + "noseOp01.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "noseOp02.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "noseOp03.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "noseOp04.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "teethOp01.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "teethOp02.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "teethOp03.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "teethOp04.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "teethOp05.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  case prefix + "teethOp06.html":
    mapOptions.view = [2.533, -7.021];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
      latlong: [3.526118, -17.02126],
      title: '<span class="popUpText">Sirene Surgical Clinic - Tijuana, Mexico</span>'
    }];
    break;

  default:

}



let map = L.map('map').setView(mapOptions.view, mapOptions.zoom);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let marker of mapOptions.markers) {
  L.marker(marker.latlong, {
      icon: myIcon
    }).addTo(map)
    .bindPopup(marker.title)
}
