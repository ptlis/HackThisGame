/*jshint jquery:true */


requirejs.config({
    shim: {
    }
});

require(
    [   'jquery',
        'game',
        'assets'],

    function($, game, assets) {

        var canvas  = $('#game');

        game.init();

        canvas.on('click', function(event) {
            var offset  = $(this).offset();

            var clickX  = event.pageX - offset.left;
            var clickY  = event.pageY - offset.top;

            var layoutData  = assets.get('menu:layout').data;
            var dest;
            for(var i = 0; i < layoutData.elements.length; i++) {
                dest    = layoutData.elements[i].dest;

                if(clickX >= dest.x && clickX < (dest.x + dest.width) && clickY >= dest.y && clickY < (dest.y + dest.height)) {
                    canvas.trigger(layoutData.elements[i].trigger);
console.log(layoutData.elements[i].trigger);
                }
            }

        });
    }
);
