import L from 'leaflet'
import 'leaflet-kmz'

function loadMap () {
  const map = L.map('map', {
    preferCanvas: true
  })

  map.setView([12.419614853889797, 120.77551644707285], 6)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

  // KMZ Layer (async)
  const kmz = L.kmzLayer().addTo(map)

  kmz.on('load', function(e) {
    control.addOverlay(e.layer, e.name)
  })

  // Load KMZ file from a cors-enabled web server
  // kmz.load('http://localhost:3001/philippines.kmz')

  // Load KMZ file relative to this script's location
  kmz.load('philippines.kmz')

  const control = L.control.layers(null, null, { collapsed: false }).addTo(map)
}

loadMap()
