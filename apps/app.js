$(function() {

    function getRequest(searchTerm) {
        var params = {
            q: searchTerm,
            part: 'snippet',
            key: 'AIzaSyA-WfPDJxx6yQnGbRJdGG6H4KuzmYJcoU4'
        };
        var url = 'https://www.googleapis.com/youtube/v3/search';
        $.getJSON(url, params, function (data) {
            showResults(data.items);
        });
    }

    function showResults(dataArray) {
        var htmlString = "";
        $.each(dataArray, function (index, item) {
            console.log(item.snippet.title);
            htmlString += item.snippet.title + "<br>" + "<a href=\"https://www.youtube.com/watch?v=" + item.id.videoId + "\"> " + "<img src=" + item.snippet.thumbnails.default.url + ">" + "</a> "+ "<br>";
        });
        $("div").append(htmlString);

    }

    $("#search-term").on('submit', function (e) {
        e.preventDefault();
        var searchTerm = $("#query").val();

        getRequest(searchTerm);

    });

});
