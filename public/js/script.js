"use strict"

// Site loader loads & fades out.
// $(window).on("load", function(){
  // setTimeout(function() { // Testing use only.
  //   $("#site-loader").css("display", "none");
  //     $("#site-container").fadeIn(2000);
  //   }, 1000);

  // // Site content fades in.
  // $("#site-container").fadeOut(2000);

  // Site scroll to anchor.
//   $(".scroll").click(function(event) {
//     event.preventDefault();

//   $("html,body").animate({
//     scrollTop: $( $(this).attr("href") ).offset().top } , 1000);
//   });
// });

// $( document ).ready(function() {
//   $("#about").click(function(event){
//     event.preventDefault();

//     $.ajax({
//       type: "GET",
//       // url: ""
//     }).done(function(response){
//       $(".site-content").html(response);
//       console.log("Added content.")
//     }).fail(function(response){
//       console.log("AJAX GET request failed.)
//     })
//   });
// });

$(document).ready(function($){
  console.log("Google Map is ready to load.");

  // Disables scrolling on site.
  $("html, body").css({
    "overflow": "hidden",
    "height": "100%"
  });

  // Set the latitude and longitude to center the map.
  // Set the starting zoom level.
  var latitude = 38.9047;
  var longitude = -77.0164;
  var mapZoom = 13;

  // Create the marker.

  // var internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  // var markerUrl = (internetExplorer11) ? "img/cd-icon-location.png" : "img/cd-icon-location.svg";
  var markerUrl = "img/cd-icon-location.png";

  // Set all the styles.
  var styles = [
    {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
        { "visibility": "on" },
        { "saturation": -100 },
        { "lightness": 20 }
      ]
    },

    {
      "featureType": "landscape.man_made",
      "elementType": "all",
      "stylers": [
        { "visibility": "simplified" },
        { "saturation": -60 },
        { "lightness": 10 }
      ]
    },

    {
      "featureType": "landscape.natural",
      "elementType": "all",
      "stylers": [
        { "visibility": "on"},
        { "saturation": -60 },
        { "lightness": 60 },
        { "color": "#e9e7e4" }
      ]
    },

    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        { "visibility": "off" },
        { "saturation": -100 },
        { "lightness": 60 }
      ]
    },

    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        { "color": "#802728" },
        { "visibility": "off" }
      ]
    },

    {
      "featureType": "poi.park",
      "elementType": "all",
      "stylers": [
        { "visibility": "off" }
      ]
    },

    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "on" },
        { "color": "#b0ce86" }
      ]
    },

    {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [
        { "visibility": "on" }
      ]
    },

    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        { "visibility": "on" },
        { "color": "#6f9543" }
      ]
    },

    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        { "visibility": "on" },
        { "color": "#6f9543" }
      ]
    },

    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "off" },
        { "color": "#ff0000" }
      ]
    },

    {
      "featureType": "poi.park",
      "elementType": "labels.icon",
      "stylers": [
        { "visibility": "simplified" }
      ]
    },

    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        { "visibility": "on" },
        { "saturation": -100 },
        { "lightness": 40 }
      ]
    },

    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        { "weight": "1.00" }
      ]
    },

    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        { "visibility": "on" },
        { "color": "#ffffff" },
        { "weight": "2.21" }
      ]
    },

    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        { "invert_lightness": true },
        { "visibility": "off" }
      ]
    },

    { // Do not show highway labels on the map.
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },

    {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
        { "color": "#a7a9ac" },
        { "visibility": "on" }
      ]
    },

    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        { "visibility": "on" }
      ]
    },

    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "on" },
        { "color": "#fffefe" }
      ]
    },

    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "on" }
      ]
    },

    {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "on" },
        { "color": "#d9d7d6" }
      ]
    },

    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        { "visibility": "off" },
        { "saturation": -100 },
        { "lightness": 60 }
      ]
    },

    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        { "visibility": "on" },
        { "saturation": -10 },
        { "lightness": 30 }
      ]
    },

    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        { "visibility": "on" }
      ]
    },

    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        { "color": "#65cdd8" },
        { "visibility": "on" }
      ]
    },

    {
      "featureType": "water",
      "elementType": "geometry.stroke",
      "stylers": [
        { "weight": "8.21" },
        { "visibility": "off" }
      ]
    },

    {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#f4f3f3" }
      ]
    },

    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        { "lightness": "73" },
        { "saturation": "0" },
        { "gamma": "1" },
        { "color": "#cdf2f7" },
        { "visibility": "on" }
      ]
    },

    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        { "visibility": "on" },
        { "color": "#7db3ba" },
        { "weight": "3.49" },
        { "lightness": "0" },
        { "gamma": "1" }
      ]
    }
  ]

  console.log("Styles are ready to load.")

  // Set all the map options.
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    panControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: true,
    styles: styles,
    zoom: mapZoom,
    zoomControl: false
  }

  // Get the HTML DOM element that will contain the map.
  // Create the Google Map using the elements and options above.
  var mapElement = document.getElementById("map-area");
  var mapArea = new google.maps.Map(mapElement, mapOptions);

  // Add a Marker as a placeholder.
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: mapArea,
    icon: markerUrl
  });
});