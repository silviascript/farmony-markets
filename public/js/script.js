"use strict"

// Site Loader Loads & Fades Out
$(window).on("load", function(){
  $("#site-container").fadeIn(2500);
});

// $( document ).ready(function() {
//   $("#about").click(function(event){
//     event.preventDefault();

//     $.ajax({
//       type: "GET",
//       // url: ""
//     }).done(function(response){
//       $(".site-content").html(response);
//       console.log("added")

//     }).fail(function(response){
//       console.log("ajax get request failed")
//     })
//   });
// });