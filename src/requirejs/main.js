/*jshint jquery:true */


requirejs.config({
    shim: {
    }
});

require(
    [   'jquery',
        'util',
        'assetManifest',
        'input'],

    function($, util, assetManifest, input) {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


        var canvas  = $('#game');
        var context = canvas[0].getContext('2d');
        var width   = canvas.width();
        var height  = canvas.height();

        // When assets are loaded begin animating
        var assetsLoaded    = function() {
            requestAnimationFrame(update);
        };
        var trackFPS        = util.trackFPS($('#fps'));                     // FPS tracking
        var assets          = util.loadAssets(assetManifest, assetsLoaded); // Asset loading
        var mouseState      = input.mouseState(canvas);                    // Track mouse state

        // Animation function
        var update  = function() {

            // Clear canvas & reset default cursor
            context.clearRect(0, 0, width, height);
            canvas.css('cursor', 'default');


            // Menu Layout
            var layoutData  = assets['menu:layout'].data;


            var source;
            var dest;


            // Draw Menu Background
            source  = assets[layoutData.background.ns].frames.base;
            dest    = layoutData.background;
            context.drawImage(
                    assets['menu:background'].asset,
                    source.x, source.y, source.width, source.height,
                    dest.x,   dest.y,   dest.width,   dest.height);

            // Draw Menu Elements
            var curElem;
            for(var i = 0; i < layoutData.elements.length; i++) {
                curElem = layoutData.elements[i];

                dest    = curElem.dest;
                if(mouseState.x >= dest.x && mouseState.x < (dest.x + dest.width) && mouseState.y >= dest.y && mouseState.y < (dest.y + dest.height)) {
                    canvas.css('cursor', 'pointer');
                    if(!mouseState.down) {
                        source  = assets[curElem.ns].frames.hover;
                    }
                    else {
                        source  = assets[curElem.ns].frames.click;
                    }
                }
                else {
                    source  = assets[curElem.ns].frames.base;
                }

                context.drawImage(
                        assets[curElem.ns].asset,
                        source.x, source.y, source.width, source.height,
                        dest.x, dest.y, dest.width, dest.height);
            }

            requestAnimationFrame(update);

            trackFPS();
        };

        canvas.on('click', function(event) {
            var offset  = $(this).offset();

            var clickX  = event.pageX - offset.left;
            var clickY  = event.pageY - offset.top;

            var layoutData  = assets['menu:layout'].data;
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
