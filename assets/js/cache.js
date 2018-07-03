
 var Module =function(data) {
    console.log(data);

    $.each(data.items, function(index, object){
        var iframe ="<iframe class =\"video fit\" src=https://www.youtube.com/embed/"+ object.id +'?autoplay=1' +
        " frameborder='0' allow=autoplay encrypted-media allowfullscreen></iframe>";
        var title =  '<h3>' + object.snippet.title+ '</h3>';
        
        var $displayAll =$('#video-to-display1');
         
        var $btn = $('#play-video1');

         if($btn.html() === 'Show more'){ 
             $displayAll.append(title)
            .append (iframe);
            $btn.html('Hide');
            
        }else{
            
            $displayAll.html('');
            $btn.html('Show more');
        }
        
        

    });

}();


