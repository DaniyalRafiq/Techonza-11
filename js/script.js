$(document).ready(function () {

    var $backToTopBtn = $("#backToTopBtn");

    // Initially hide the button using flex
    $backToTopBtn.css("display", "flex");
  
    // Add a scroll event listener
    $(window).scroll(function () {
      // If the user scrolls down more than 300 pixels, show the button
      if ($(this).scrollTop() > 300) {
        $backToTopBtn.css("display", "flex");
      } else {
        $backToTopBtn.css("display", "none");
      }
    });
  
    // Add a click event listener to scroll back to the top
    var $input = $('.header_form input');
    var $headerResult = $('.header_serach_result');

    // Initially hide .header_serach_result
    $headerResult.hide();

    // Attach a keyup event handler to the input field
    $input.keyup(function () {
        // Check if the input field is empty
        if ($input.val().trim() === '') {
            $headerResult.slideUp(); // If empty, slide up .header_serach_result
        } else {
            $headerResult.slideDown(); // If not empty, slide down .header_serach_result
        }
    });

    // Attach a blur event handler to the input field
    $input.blur(function () {
        $headerResult.slideUp(); // Slide up .header_serach_result when input loses focus
    });
  
});
