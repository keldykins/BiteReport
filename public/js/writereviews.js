var restName = $("#rest-name").val()
if (restName !== undefined ) {
  var restaurantNames = restName.split("-").filter(x => x !== "-").join(" ")
$("#rest-name").val(restaurantNames);
}



    var restInput = $("#rest-name");
    var itemInput = $("#item-name");
    var priceInput = $("#price");
    var ratingInput = $("#rating");
    var reviewInput = $("#review");
    var submitButton = $("#submit-review");
    var viewReviews = $("#all-reviews");

// ------event listener and function to submit new review -----------
    $(submitButton).on("click", function(event) {
        console.log("I clicked on " + submitButton);
        console.log(event);
        createPost();
    });
  
    function createPost(event) {
  
        var newPost = {
            restaurant_name: restInput.val().trim(),
            item_name: itemInput.val().trim(),
            item_price: priceInput.val(),
            rating: ratingInput.val().trim(),
            review: reviewInput.val().trim()
        };
        console.log(newPost);
        submitPost(newPost);
        }

    // -----------event listener and function to view all reviews-----

    $("#all-reviews").on("click", function(event) {
        event.preventDefault();
        console.log("I clicked on all reviews button" );
        
        var restaurantNames = restName.split("-").filter(x => x !== "-").join(" ")
        $("#rest-name").val(restaurantNames);
        console.log(restaurantNames);
          $.get(`/api/reviews/${restaurantNames}`, function(data) {
            console.log(data);
            var allReviews = [];
            for (var i = 0; i < data.length; i++) {
              allReviews.push(data[i]);
            }
            var showReviews = JSON.stringify(allReviews);
            showReviews = `
            <div class="wrapper">
              <div class="allreviews">
              <div class="allResults">
                <h5>${restaurantNames}</h5>
                <p>
                Item: ${data[0].item_name}<br>
                Price: $${data[0].item_price}<br>
                Would you eat this again?: ${data[0].rating}<br>
                Review: <br>
                ${data[0].review}
                </p>
              </div>

            <div class="allResults">
            <h5>${restaurantNames}</h5>
            <p>
            Item: ${data[1].item_name}<br>
            Price: $${data[1].item_price}<br>
            Would you eat this again?: ${data[1].rating}<br>
            Review: <br>
            ${data[1].review}
            </p>
            </div>

            <div class="allResults">
            <h5>${restaurantNames}</h5>
            <p>
            Item: ${data[2].item_name}<br>
            Price: $${data[2].item_price}<br>
            Would you eat this again?: ${data[2].rating}<br>
            Review: <br>
            ${data[2].review}
            </p>
            </div>
            </div>
            </div>
            `

            $("#showReviews").prepend(showReviews);

            //if(data[0].restaurant_name ===  ) {
            //$("#showReviews").append(showReviews);
            //} else {
            //$("#showReviews").append(noReviews);
            //}
      });
    });
      
        function submitPost(post) {
        $.post("/api/reviews", post).done(function(res) {
            console.log(res);
            // window.location.replace("/members");
          }).fail(function(err) {
            console.log(err);
            // handleLoginErr(err);
          })
    };