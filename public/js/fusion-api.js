const axios = require('axios');

function getRestaurantInfo() {
    var restaurantArray = $("#resName").val().trim().split(" ");

    var restaurantLocationArray = $("#resLocation").val().trim().split(" ");
    
    var restaurantResponse = [...restaurantArray, ...restaurantLocationArray];

    var restaurantString = ""
    restaurantResponse.forEach(function(x) {
        restaurantString = restaurantString.concat(`${x}-`)
    })
    var resSliced = restaurantString.slice(0, -1);

    axios({
        method: 'get',
        url:'https://api.yelp.com/v3/businesses/' + resSliced,
        headers: {
            Authorization: "Bearer QCPNgMJoAHDFaqXp6QER372FLORt7TDuWjMtQKDpNTS3-TXtuH-UjeeTQAFD8p5UdQcq_xDJ38GCUmAm_sN1iFiKVJhjCpCCoG6TOLMLyUNv8G951dHZ0yeEQpNvX3Yx" 
        }
    }).then(res => showOutput(res))
    .catch(err => console.error(err));
}

function showOutput(res) {
    /*document.getElementById('res').innerHTML = `
    <h1> ${res.name} </h1>`*/
    //console.log(res.data);
}

getRestaurantInfo();
