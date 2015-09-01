//http://blog.webkid.io/maps-with-leaflet-and-topojson/

// Leaflet doesn't know anything about TopoJSON, so we need to extend it in order to be able to add TopoJSON directly as a tilelayer.k
// https://gist.github.com/rclark/5779673
L.TopoJSON = L.GeoJSON.extend({
  addData: function(jsonData) {    
    if (jsonData.type === "Topology") {
      for (key in jsonData.objects) {
        geojson = topojson.feature(jsonData, jsonData.objects[key]);
        L.GeoJSON.prototype.addData.call(this, geojson);
      }
    }    
    else {
      L.GeoJSON.prototype.addData.call(this, jsonData);
    }
  }  
});

(function(){
'use strict'
  
var map = L.map('worldmap',{maxZoom:10,minZoom:1}),
  topoLayer = new L.TopoJSON()//, //new TopoJSON layer
  //$countryName = $('.country-name')/*,
  //color to the scale and the input range
  /*colorScale = chroma
    .scale(['#D5E3FF', '#003171'])
    .domain([0,1])*/;
/*L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
attribution: 'CC-BY Michal Škop | Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
}).addTo(map);*/
map.setView([51.4380436,13.390182], 4);

//we load our countries.topo.json file via ajax and add the data to the layer.
var countries = {};
$.getJSON('member_states.json', function(data) {
  countries = data;
  $.getJSON('countries.topo.json').done(addTopoData);
});
function addTopoData(topoData){
  topoLayer.addData(topoData);
  topoLayer.addTo(map);
  topoLayer.eachLayer(handleLayer);
}
function handleLayer(layer){

    var code = layer.feature.properties.code;
    if (typeof(countries[code]) != 'undefined') {
        var fillColor = "#003399";
    } else {
        var fillColor = "#525252";
    }

      
    layer.setStyle({
      fillColor : fillColor,
      fillOpacity: .5,
      color:'#555',
      weight:1,
      opacity:.5
    });
    layer.on({
      mouseover : enterLayer,
      mouseout: leaveLayer,
      click: onMapClick
    });
}
function onMapClick(){
    var code = this.feature.properties.code;
    if (typeof(countries[code]) != 'undefined') {
        window.location = '../?cc=' + code
    }
}
function enterLayer(){
  var countryName = this.feature.properties.code + ": " + this.feature.properties.name;
  //$countryName.text(countryName).show();
  
  this.bringToFront();
  this.setStyle({
    weight:2,
    opacity: 1
  });
  if (typeof(countries[this.feature.properties.code]) != 'undefined') {
      this.setStyle({
        fillColor : "#FFCC00"
      })
  }
}
function leaveLayer(){
  //$countryName.hide();
  this.bringToBack();
  this.setStyle({
    weight:1,
    opacity:0.5
  });
  if (typeof(countries[this.feature.properties.code]) != 'undefined') {
      this.setStyle({
        fillColor : "#003399"
      })
  }
}
}());
