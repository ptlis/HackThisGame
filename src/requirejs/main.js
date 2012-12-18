/*jshint jquery:true */


requirejs.config({
    shim: {
    }
});

require(
    [   'jquery',
        'util',
        'assetManifest'],

    function($, util, assetManifest) {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        var trackFPS    = util.trackFPS($('#fps'));
            
        var canvas  = $('#game');
        var context = canvas[0].getContext('2d');
        var width   = canvas.width();
        var height  = canvas.height();
        
        
        // Animation function
        var update  = function() {
            
            // Clear canvas & reset default cursor
            context.clearRect(0, 0, width, height);
            canvas.css('cursor', 'default');
            
            var source;
            
            
            // New Game Button
            if(mouseX >= 0 && mouseX < 250 && mouseY >= 0 && mouseY < 70) {
                source  = assets['menu:new_game'].frames.hover;
                canvas.css('cursor', 'pointer');
            }
            else {
                source  = assets['menu:new_game'].frames.base;
            }
            context.drawImage(
                    assets['menu:new_game'].asset,
                    source.x, source.y, source.width, source.height,
                    0, 0, 250, 70);

            
            // Continue button
            if(mouseX >= 0 && mouseX < 250 && mouseY >= 70 && mouseY < 140) {
                source  = assets['menu:continue'].frames.hover;
                canvas.css('cursor', 'pointer');
            }
            else {
                source  = assets['menu:continue'].frames.base;
            }
            context.drawImage(
                    assets['menu:continue'].asset,
                    source.x, source.y, source.width, source.height,
                    0, 70, 250, 70);

            
            // Options Button
            if(mouseX >= 0 && mouseX < 250 && mouseY >= 140 && mouseY < 210) {
                source  = assets['menu:options'].frames.hover;
                canvas.css('cursor', 'pointer');
            }
            else {
                source  = assets['menu:options'].frames.base;
            }
            context.drawImage(
                    assets['menu:options'].asset,
                    source.x, source.y, source.width, source.height,
                    0, 140, 250, 70);

            requestAnimationFrame(update);
            
            trackFPS();
        };
        
        
        // When assets are loaded begin animating
        var assetsLoaded    = function() {
            requestAnimationFrame(update);
        };
        
    // Asset loading
        var assets  = util.loadAssets(assetManifest, assetsLoaded);
        
        
    // Track mouse position
        var mouseX  = -1;
        var mouseY  = -1;
        canvas.on('mousemove', function(event) {
            var offset  = $(this).offset();

            mouseX  = event.pageX - offset.left;
            mouseY  = event.pageY - offset.top;
        });
        canvas.on('mouseleave', function(event) {
            mouseX  = -1;
            mouseY  = -1;
        });
    }
);
