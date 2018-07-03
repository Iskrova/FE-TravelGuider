var $btn = $('#play-video1');

$(document).ready(function(){
    $btn.on('click', function(){
        $.ajax({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/videos?&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics&id=cMcSU7NTAPc&key=AIzaSyDPjSmSvHHszadu8hiz3VeTY3qGooALFos',
            dataType: 'jsonp',
            success: function(data){ 
                console.log("success", data);
                
                $.each(data, function(index, object){
                    var iframe ="<iframe class =\"video fit\" src=https://www.youtube.com/embed/"+ object[0].id +'?autoplay=1' +
                    " frameborder='0' allow=autoplay encrypted-media allowfullscreen></iframe>";
                    var title =  '<h3>' + object[0].snippet.title+ '</h3>';
                    
                    var $displayAll =$('#video-to-display1');
                     
                
                     if($btn.html() === 'Show more'){ 
                         $displayAll.append(title)
                        .append (iframe);
                        $btn.html('Hide');
                        
                    }else{
                        
                        $displayAll.html('');
                        $btn.html('Show more');
                    }
                    
                    

                });
            }
        });
       
    });
});
