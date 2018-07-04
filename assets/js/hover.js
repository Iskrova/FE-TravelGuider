(function(){
    var $first = $('#Santorini1');
    var second = 'images/santorini2.jpg';
    $first.hover(function(){
        $(this).attr('src',second);
    },function(){
        $(this).attr('src', 'images/Santorini.jpg');
    });
})();
