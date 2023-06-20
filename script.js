<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

$(document).ready(function() {
  $('.title').click(function() {
    $('.container').addClass('open');
  });

  $('.close').click(function() {
    $('.container').removeClass('open');
  });
});
