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
        console.log("I clicked on all reviews button" );
        
        allReviews();
    });


    function allReviews() {
        $.get("/api/reviews", function(data) {
          var allReviews = [];
          for (var i = 0; i < data.length; i++) {
            allReviews.push(viewReviews);
          }
        });
    };
 
    
      // Submits a new post and brings user to reviews page upon completion
        function submitPost(post) {
        $.post("/api/reviews", post).done(function(res) {
            console.log(res);
            // window.location.replace("/members");
          }).fail(function(err) {
            console.log(err);
            // handleLoginErr(err);
          })
    };
