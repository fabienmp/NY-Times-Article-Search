$(document).ready(function () {
    console.log("ready!");


    function searchArticle(searchTerm, totalRecords, startYear, endYear) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=4AKA9n1dQpNxFY6AmRYzjBkXNvuc5zZ1";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }
    
});