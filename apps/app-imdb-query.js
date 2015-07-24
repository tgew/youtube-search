$(function(){

//    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=jason', function(data){
//
//        myData = data.Search;
//        for (var prop in myData) {
//            if (myData.hasOwnProperty("Title")) {
//                console.log(myData.Title);
//            }
//        }
//    })
//
//      $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
//    myData = data.Search;
//    $.each(myData, function(index,value){
//      console.log(value.Title);
//    });
//  });
$("#search-term").on('submit', function(e) {
    e.preventDefault();
    var searchTerm = $("#query").val();
    searchTerm = "http://www.omdbapi.com/?s=" + searchTerm + "&r=json";

    $.getJSON(searchTerm, function(data){
        myData = data.Search;
        showResults(myData);
    });
//});

function getRequest(searchTerm) {
    var parms {
        s = searchTerm;
        r = 'json';
    };

    url = 'http://www.omdbapi.com';
    $.getJSON(url, params function(data){
        showResults(data.Search);
    });

}

function showResults(dataArray) {
    var htmlString = "";
    $.each(dataArray, function(index,value){
        console.log(value.Title);
        htmlString += value.Title + "<br>";
    });
    $("div").append(htmlString);

}

});
