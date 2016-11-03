//= ../../bower_components/jquery/dist/jquery.js

//= partials/app.js

$('.add-content').on("click", function() {
  $('.lipsum').clone().removeClass("lipsum").appendTo('.wrap-lipsum');
});