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
  // var latitude = 51.5255069;
  // var  longitude = -0.0836207;
  // var  map_zoom = 14;

  // var map_options = {

    
  //   center: new google.maps.LatLng(latitude, longitude),
  //   zoom: map_zoom,
  //   panControl: false,
  //   zoomControl: false,
  //   mapTypeControl: false,
  //   streetViewControl: false,
  //   scrollwheel: false,
  // }


$( document ).ready(function($){
  console.log("Google Map is ready to load.");

  // Set the latitude and longitude to center the map.
  // Set the starting zoom level.
  var latitude = 38.9047;
  var longitude = -77.0164;
  var mapZoom = 11;

  // Set all the styles.

  // Set all the map options.
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude), 
    zoom: mapZoom
  }

  // Get the HTML DOM element that will contain the map.
  // Create the Google Map using the elements and options above.
  var mapElement = document.getElementById("map-area");
  var mapArea = new google.maps.Map(mapElement, mapOptions);

  // Add a Marker as a placeholder.
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: mapArea
  });
});