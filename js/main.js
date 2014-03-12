$(function(){
    $('.wheel').wof({
        prizes: [1, 2, 3, 4, 5, 6, 7, 8],
        wonPrize: 8,
        multiple: true,
        marker: $('.marker')
    }, function(data){
        alert(data);
    });
});