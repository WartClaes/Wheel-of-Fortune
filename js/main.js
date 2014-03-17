$(function(){
    $('.wheel').wof({
        prizes: [1, 2, 3, 4, 5, 6, 7, 8],
        wonPrize: 15,
        multiple: true,
        marker: $('.marker'),
        timeout: 2000
    }, function(data){
        console.log(data);
    });
});