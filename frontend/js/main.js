var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
    interval: 2000, // Set the interval for automatic sliding (in milliseconds)
    wrap: true,     // Set to false if you don't want the carousel to loop
});

// menu button  start==============================
$(document).ready(function () {
    // jQuery to toggle cart visibility
    $('#menuButton').click(function () {
        $('#menuContainer').css('display', 'block');
    });

    $('#closeMenu').click(function () {
        $('#menuContainer').css('display', 'none');
    });
});


// portfolio tab Content
$(document).ready(function () {
    // Initially show all cards
    $(".col-md-3").show();

    // When a filter button is clicked
    $("#filter-buttons li").click(function () {
        var filter = $(this).data("filter");
        if (filter === "all") {
            $(".col-md-3").show(); // Show all cards
        } else {
            $(".col-md-3").hide(); // Hide all cards
            $(".col-md-3[data-filter='" + filter + "']").show(); // Show cards with matching filter
        }
        // Update active class
        $("#filter-buttons li").removeClass("active");
        $(this).addClass("active");
    });
});