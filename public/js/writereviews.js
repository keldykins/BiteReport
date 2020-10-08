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
              <div class="allResults" id= 1>
                <h5>${restaurantNames}</h5>
                <p>
                Item: ${data[0].item_name}<br>
                Price: $${data[0].item_price}<br>
                Would you eat this again?: ${data[0].rating}<br>
                Review: <br>
                ${data[0].review}
                </p>
              </div>
               
              <button id="delete-button1" id=1>Delete Post</button>
              <br>
              <br>
            <div class="allResults" id=2>
            <h5>${restaurantNames}</h5>
            <p>
            Item: ${data[1].item_name}<br>
            Price: $${data[1].item_price}<br>
            Would you eat this again?: ${data[1].rating}<br>
            Review: <br>
            ${data[1].review}
            </p>
            
            </div>

            <button id="delete-button2">Delete Post</button>
            
            
            <br>
            <br>
            <div class="allResults" id=3>
            <h5>${restaurantNames}</h5>
            <p>
            Item: ${data[2].item_name}<br>
            Price: $${data[2].item_price}<br>
            Would you eat this again?: ${data[2].rating}<br>
            Review: <br>
            ${data[2].review}
            </p>
            </div>

        
            <button id="delete-button3">Delete Post</button>
            <br>
            <br>
            </div>
            </div>
            `

            $("#showReviews").prepend(showReviews);

            if(data[0].restaurant_name === restaurantNames ) {
            $("#showReviews").append(showReviews);
            } else {
            $("#showReviews").append(noReviews);
            }
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
// -------------- delete button click event and function to send ajax delete request to DB--------

$("#delete-button1").on("click", 'button', function(event) {
    console.log("I clicked on the del button")
    // console.log(event);
    // let id = event.parent.id
    // $(`#${id}`).remove();
    // $.ajax({
    //     method: "GET",
    //     url: "/api/delete/" + id
    //   }).then(showReviews)
  });