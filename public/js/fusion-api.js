function getRestaurantInfo() {
    var restaurantName = $("#restaurant").val().trim();

    axios({
        method: 'get',
        url:'https://api.yelp.com/v3/businesses/' + restaurantName,
        headers: {
            Authorization: "Bearer QCPNgMJoAHDFaqXp6QER372FLORt7TDuWjMtQKDpNTS3-TXtuH-UjeeTQAFD8p5UdQcq_xDJ38GCUmAm_sN1iFiKVJhjCpCCoG6TOLMLyUNv8G951dHZ0yeEQpNvX3Yx" 
        }
    }).then(res => showOutput(res))
    .catch(err => console.error(err));
}

function postRestaurantInfo() {
    axios({
        method: 'post',
        data: {
            name: '',
            review_count: 0
        }
    }).then(res => showOutput(res))
    .catch(err => console.error(err));
}

function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <h1> ${res.name} </h1>`
}