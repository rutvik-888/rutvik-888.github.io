let startTouchY = 0;  // Store starting touch position
let currentScroll = 0;  // Track current scroll position

// Track the start of the touch gesture
document.body.addEventListener("touchstart", function(e) {
    startTouchY = e.touches[0].clientY;
}, false);

// Track the movement of the touch gesture
document.body.addEventListener("touchmove", function(e) {
    e.preventDefault();  // Prevent default scrolling behavior
    let touchMoveY = e.touches[0].clientY;
    let deltaY = startTouchY - touchMoveY;  // Calculate the distance moved

    // Adjust scroll position based on swipe direction (up or down)
    currentScroll += deltaY;

    // Apply the scroll position (keeping it within bounds)
    document.documentElement.scrollTop = currentScroll;
    document.body.scrollTop = currentScroll;

    startTouchY = touchMoveY;  // Update the starting position for the next move
}, { passive: false });

// Optionally, you can handle the end of the swipe to finalize the scroll position
document.body.addEventListener("touchend", function(e) {
    // You can add any additional logic to snap the scroll or adjust the position further if necessary
}, false);

$(document).ready(function(){
  // Trigger animation on click
  $('.title').click(function(){
    $('.container').addClass('open');
  });

  // Close animation on clicking the close button
  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});
