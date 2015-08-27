// Farmers Market API

var farmersMarketApi = {
  sayHello: function() {
    console.log("Hello! Market API.")
  },

  marketResults: function(zip) {
    // Function getResults(lat, lng) {
    $.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",

      // Submit a get request to the restful service zipSearch or locSearch.
      url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip,

      // url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=" + lat + "&lng=" + lng.
      dataType: 'jsonp',
      jsonpCallback: 'searchResultsHandler'
    });
  },

  //Iterate through the JSON result object.
  searchResultsHandler: function(searchResults) {
    for (var key in searchresults) {
      alert(key);
      var results = searchresults[key];
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        for (var key in result) {
          // Only do an alert on the first search result.
          if (i == 0) {
            alert(result[key]);
          }
        }
      }
    }
  }
}
