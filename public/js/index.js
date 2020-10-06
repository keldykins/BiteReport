// var login = document.querySelector("#login")

// login.addEventListener("click", function(){
    
// })

$(document).ready(function() {

    var restInput = $("#rest-name");
    var itemInput = $("#item-name");
    var priceInput = $("#price");
    var ratingInput = $("#rating");
    var reviewInput = $("#review");
    var submitButton = $("#submit-review")


    $(submitButton).on("click", createPost);

    function createPost(event) {
        event.preventDefault();
        // Wont submit the post if we are missing any restaurant information from the form
        if (!restInput.val().trim() || !itemInput.val().trim() || !priceInput.val() || !ratingInput.val().trim() || !reviewInput.val().trim()) {
          return;
        }
        // Constructing a newPost object to hand to the database
        var newPost = {
          restaurant_name: restInput
            .val()
            .trim(),
          item_name: itemInput
            .val()
            .trim(),
          item_price: priceInput.val(),
          rating: ratingInput
            .val()
            .trim(),
            review: reviewInput
            .val()
            .trim()

        };
    
       
        
          submitPost(newPost);
        
        }
    
      // Submits a new post and brings user to reviews page upon completion
      function submitPost(post) {
        $.post("/api/reviews", post, function() {
          window.location.href = "/reviews";
        });
      }
    }
});