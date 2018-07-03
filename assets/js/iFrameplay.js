$(document).ready(function() {
  $('#play-video').on('click', function(event) {
    var $video = $('#video')[0];
    
    $video.src += "?autoplay=1";
    event.preventDefault();
 
  });
});


//demo
// $('.items-list li')
// $('.items-list')
// .on('click', 'li', function(e){

//});