/*jshint jquery:true */


requirejs.config({
    shim: {
    }
});

require(
    [   'jquery',
        'util'],

    function($, util) {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        var trackFPS    = util.trackFPS($('#fps'));
            
        var canvas  = $('#game');
        var context = canvas[0].getContext('2d');
        var width   = canvas.width();
        var height  = canvas.height();
        
        
        // Animation function
        var update  = function() {
            context.clearRect(0, 0, width, height);

            canvas.css('cursor', 'default');
            
            if(mouseX >= 0 && mouseX < 250 && mouseY >= 0 && mouseY < 70) {
                context.drawImage(
                        images[imagePaths[0]],
                        0, 70, 250, 70,
                        0, 0, 250, 70);
                canvas.css('cursor', 'pointer');
            }
            else {
                context.drawImage(
                        images[imagePaths[0]],
                        0, 0, 250, 70,
                        0, 0, 250, 70);
            }

            if(mouseX >= 0 && mouseX < 250 && mouseY >= 70 && mouseY < 140) {
                context.drawImage(
                        images[imagePaths[1]],
                        0, 70, 250, 70,
                        0, 70, 250, 70);
                canvas.css('cursor', 'pointer');
            }
            else {
                context.drawImage(
                        images[imagePaths[1]],
                        0, 0, 250, 70,
                        0, 70, 250, 70);
            }

            if(mouseX >= 0 && mouseX < 250 && mouseY >= 140 && mouseY < 210) {
                context.drawImage(
                        images[imagePaths[2]],
                        0, 70, 250, 70,
                        0, 140, 250, 70);
                canvas.css('cursor', 'pointer');
            }
            else {
                context.drawImage(
                        images[imagePaths[2]],
                        0, 0, 250, 70,
                        0, 140, 250, 70);
            }

            requestAnimationFrame(update);
            
            trackFPS();
        };
        
        
        // When assets are loaded begin animating
        var assetsLoaded    = function() {
            requestAnimationFrame(update);
        };
        
    // Asset loading
        var imagePaths  = [
           'images/menu/new_game.png',
           'images/menu/continue.png',
           'images/menu/options.png'];
        
        
        var collector   = util.collector(imagePaths.length, assetsLoaded);
        var images      = {};
        for(var i = 0; i < imagePaths.length; i++) {
            images[imagePaths[i]]           = new Image();
            images[imagePaths[i]].onload    = collector;
            images[imagePaths[i]].src       = imagePaths[i];
        }
        
        
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
