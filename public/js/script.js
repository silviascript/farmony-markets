"use strict"

// Site loader loads & fades out.
$(window).on("load", function(){
  setTimeout(function() { // Testing use only.
    $("#site-loader").css("display", "none");
      $("#site-container").fadeIn(2000);
    }, 1000);

  // Site content fades in.
  $("#site-container").fadeOut(2000);

  // Site scroll to anchor.
  $(".scroll").click(function(event) {
    event.preventDefault();

  $("html,body").animate({
    scrollTop: $( $(this).attr("href") ).offset().top } , 1000);
  });
});

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