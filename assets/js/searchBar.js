var searchBarModel =function(){
    var $modal = $('#myModal');
    var modal = document.getElementById('myModal');
    var $searchBtn = $('#search-btn');
    var $span =$('#close-btn');

    $searchBtn.on( 'click',function() {
        var $searchstring  = $('.form-control');
        $searchstring.focus();
        var $q = $searchstring.val();
        console.log($q);
        $.ajax({
            type: 'GET',
            url: ' https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='+$q +'travel&key=AIzaSyDPjSmSvHHszadu8hiz3VeTY3qGooALFos',
            dataType: 'jsonp',
            success: function(data){
                console.log("success", data);

                $.each(data.items, function(index, object){

                    var video_id =object.id.videoId;

                    console.log(video_id);


                    var iframe ="<iframe class =\"modal-content\" src=https://www.youtube.com/embed/"+video_id +'?autoplay=1' +
                        " frameborder='0' allow=autoplay encrypted-media allowfullscreen></iframe>";

                    $modal.append(iframe)
                        .css('display', 'block');
                    $searchBtn.attr('disabled', true);

                });
            }
        });

    });


    $span.on( 'click',function() {
        $modal.html('');
        $modal.css('display', 'none');
        $searchBtn.attr('disabled', false);
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            $modal.html('');
            $modal.css('display', 'none');
            $searchBtn.attr('disabled', false);
            //modal.style.display = "none";
        }
    }
}();



