// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    const id = $(this).data("id");
    const eatBurger= $(this).data("devourBurger");

    const eatBurgerState = {
      devour: eatBurger
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: eatBurgerState
    }).then(
      function() {
        console.log("devoured burgerp to", eatBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#burger").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devour-burger").on("click", function(event) {
      const id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("sooo goood!!!!", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  