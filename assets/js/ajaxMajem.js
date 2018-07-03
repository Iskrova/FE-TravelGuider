
(function(){
    var $btn = $('#play-video1');
    var $displayAll =$('#video-to-display1');
    var urlChunk = 'ZZ9E-Jadv88';
    $btn.on('click', function(){
        ajaxRequest(urlChunk, $btn,$displayAll);
    });
})();

(function(){
    var $btn = $('#play-video2');
    var $displayAll =$('#video-to-display2');
    var urlChunk = 'cMcSU7NTAPc';
    $btn.on('click', function(){
        ajaxRequest(urlChunk, $btn, $displayAll);
    });
})();

(function(){
    var $btn = $('#play-video3');
    var $displayAll =$('#video-to-display3');
    var urlChunk = 'TNKyJKXnWmI';
    $btn.on('click', function(){
        ajaxRequest(urlChunk, $btn, $displayAll);
    });
})();

(function(){
    var $btn = $('#play-video4');
    var $displayAll =$('#video-to-display4');
    var urlChunk = 'UfEiKK-iX70';
    $btn.on('click', function(){
        ajaxRequest(urlChunk, $btn, $displayAll);
    });
})();

(function(){
    var $btn = $('#play-video5');
    var $displayAll =$('#video-to-display5');
    var urlChunk = 'L_bgTJkFk3k';
    $btn.on('click', function(){
        ajaxRequest(urlChunk, $btn, $displayAll);
    });
})();

(function(){
    var $btn = $('#play-video6');
    var $displayAll =$('#video-to-display6');
    var urlChunk = 'TmDKbUrSYxQ';
    $btn.on('click', function(){
        ajaxRequest(urlChunk, $btn, $displayAll);
    });
})();


var ajaxRequest =function(url, btn, displayBox) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos?&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics&id='+ url +'&key=AIzaSyDPjSmSvHHszadu8hiz3VeTY3qGooALFos',
        dataType: 'jsonp',
        success: function(data){
            console.log("success", data);

            $.each(data, function(index, object){
                var iframe ="<iframe class =\"video fit\" src=https://www.youtube.com/embed/"+ object[0].id +'?autoplay=1' +
                    " frameborder='0' allow=autoplay encrypted-media allowfullscreen></iframe>";
                var title =  '<h3>' + object[0].snippet.title+ '</h3>';


                if(btn.html() === 'Show more'){
                    displayBox.append(title)
                        .append (iframe);
                    btn.html('Hide');

                }else{

                    displayBox.html('');
                    btn.html('Show more');
                }



            });
        }
    });
};