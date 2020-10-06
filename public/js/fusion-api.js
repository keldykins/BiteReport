$(document).ready(() => {

var baseUrl = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/";

function getRestaurantInfo() {

    var restaurantArray = $("#resName").val().trim().split(" ");
    var restaurantLocationArray = $("#resLocation").val().trim().split(" ");
    var restaurantResponse = [...restaurantArray, ...restaurantLocationArray];
    
    var restaurantString = "";
    let finalUrl;
    restaurantResponse.forEach(function (x) {
    restaurantString = restaurantString.concat(`${x}-`);

    var resSliced = restaurantString.slice(0, -1);
    finalUrl = baseUrl + resSliced;
    })

    $.ajax({
        type: "GET",
        url: finalUrl,
        headers: {
        authorization:
            "Bearer QCPNgMJoAHDFaqXp6QER372FLORt7TDuWjMtQKDpNTS3-TXtuH-UjeeTQAFD8p5UdQcq_xDJ38GCUmAm_sN1iFiKVJhjCpCCoG6TOLMLyUNv8G951dHZ0yeEQpNvX3Yx"
        }
    })
        .then(res => {
            console.log(res)
            console.log(res.name)
            showOutput(res)
        })
};


function showOutput(res) {
var searchResult = 
`<h1>${res.name}</h1>
<h5>Address: ${res.location.display_address}</h5>                   `

$('#res').append(searchResult);
};

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    getRestaurantInfo();
});

});