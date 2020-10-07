$(document).ready(() => {

var baseUrl = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/";

function addHyp(arr) {
    var restaurantString = "";
    arr.forEach(function (x) {
    restaurantString = restaurantString.concat(`${x}-`);
});    
    var resSliced = restaurantString.slice(0, -1);
    return resSliced;
};

function getRestaurantInfo() {

    var restaurantArray = $("#resName").val().trim().split(" ");
    var restaurantLocationArray = $("#resLocation").val().trim().split(" ");
    var restaurantResponse = [...restaurantArray, ...restaurantLocationArray];
    var varHyp = addHyp(restaurantResponse);
    console.log(varHyp);
    finalUrl = baseUrl + varHyp;

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
var wholeName = res.name.split(" ")
var varHyp = addHyp(wholeName);
var searchResult = 
`   <div class="z-depth-4 eachResult">
    <img src="${res.image_url}" alt="Restaurant" width="200" height="150">
    <h1>${res.name}</h1>
    <h5>Address: ${res.location.display_address}</h5>
    <h5>Phone: ${res.display_phone}</h5>
    <a href="http://localhost:8080/${varHyp}">
    <br>               
    <button class="waves-effect waves-light btn writeReview">Write a Review</button>
    </a>
    </div>
    <br><br>
`

$('#res').prepend(searchResult);
};

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    getRestaurantInfo();
});

/*$(".writeReview").on("click", function (event) {
    event.preventDefault();
    console.log('click');
    reviewRedirect(this.resname);
});

function reviewRedirect(name) {

    window.location.replace(`https://localhost:8080/writereviews/${name}`);
}*/

});