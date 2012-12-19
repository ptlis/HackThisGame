/*jshint jquery:true */


requirejs.config({
    shim: {
    }
});

require(
    [   'jquery',
        'util',
        'assetManifest',
        'input',
        'assets'],

    function($, util, assetManifest, input, assets) {
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
        var assetArr        = assets.loadAssets('menu_assets', assetManifest, assetsLoaded); // Asset loading
        var mouseState      = input.mouseState(canvas);                    // Track mouse state

        // Animation function
        var update  = function() {

            // Clear canvas & reset default cursor
            context.clearRect(0, 0, width, height);
            canvas.css('cursor', 'default');


            // Menu Layout
            var layoutData  = assetArr['menu:layout'].data;


            var source;
            var dest;


            // Draw Menu Background
            source  = assetArr[layoutData.background.ns].frames.base;
            dest    = layoutData.background;
            context.drawImage(
                    assetArr['menu:background'].asset,
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
                        source  = assetArr[curElem.ns].frames.hover;
                    }
                    else {
                        source  = assetArr[curElem.ns].frames.click;
                    }
                }
                else {
                    source  = assetArr[curElem.ns].frames.base;
                }

                context.drawImage(
                        assetArr[curElem.ns].asset,
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

            var layoutData  = assetArr['menu:layout'].data;
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
