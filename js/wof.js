(function($){
    $.fn.wof = function(options, callback) {

        function init(){
            // reverse the prizes in because it is spinning clockwise
            if(!settings.prizes){
                console.error('No prizes set');
                return false;
            }

            settings.prizes = settings.prizes.reverse();

            if(settings.timeout !== false){
                setTimeout(function(){
                    if (!settings.button.hasClass('disabled')) spin();
                }, settings.timeout);
            }

            settings.button.on('click', function(event){
                event.preventDefault();
                if (!$(this).hasClass('disabled')) spin();
            });
        }

        function spin(){

            resetSpin();

            settings.button.addClass('disabled');

            var nrOfPrizes = settings.prizes.length,
                segment = 360 / nrOfPrizes;
                position = 1500 + Math.round(Math.random() * 1500);

            if(settings.wonPrize && settings.prizes.indexOf(settings.wonPrize) >= 0){
                var key = settings.prizes.indexOf(settings.wonPrize) + 1;
                position = 2520 + ((segment * key) - (Math.random() * segment));
            }

            //transition queuing
            //ff bug with easeOutBack
            settings.wheel.transition({
                rotate: '0deg'
            }, 0)
                .transition({
                rotate: position + 'deg'
            }, settings.duration, settings.easing);

            if(settings.marker){
                //just before wheel finish
                setTimeout(function(){
                    //reset marker
                    settings.marker.transition({
                        rotate: '0deg'
                    }, 300, 'easeOutQuad');

                    settings.marker.removeClass('moving');
                }, settings.duration - 500);

                settings.marker.addClass('moving');
                //move marker
                settings.marker.transition({
                    rotate: '-20deg'
                }, 100, 'easeInQuad');
            }

            setTimeout(function(){

                var spin = position,
                    degrees = spin % 360,
                    win = Math.ceil(degrees / segment) - 1,
                    prize = settings.prizes[win];

                setTimeout(function(){
                    if(settings.multiple){
                        settings.button.removeClass('disabled');
                    }

                    if(typeof callback !== 'undefined'){
                        callback(prize);
                    }
                }, 500);

            }, settings.duration);
        }

        function resetSpin(){
            settings.wheel.transition({
                rotate: '0deg'
            }, 0);

            position = 0;
        }

        var $this = this,
            settings = $.extend({
                wheel: $this,
                marker: false,
                button: $this,
                prizes: false,
                duration: 6000,
                multiple: false,
                wonPrize: false,
                timeout: false,
                easing: 'cubic-bezier(.25,0,.17,1)'
            }, options),
            position = 0;

        init();
    }
})(jQuery);
