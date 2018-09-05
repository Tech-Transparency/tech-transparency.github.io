$(function() {
  var waypoint = new Waypoint({
    element: $('#section-after-hero'),
    handler: function(direction) {
      // toggle navbar's transparency based on how far down the page you are
      var navbar = $('#main-navbar');
      if (direction === "down") {
        // scrolling down past the hero, turn the navbar white
        navbar.removeClass("bg-transparent")
          .addClass("bg-light");
      } else if (direction === "up") {
        // scrolling up to the hero, turn navbar transparent
        navbar.removeClass("bg-light")
          .addClass("bg-transparent");
      }
    }
  });


});
