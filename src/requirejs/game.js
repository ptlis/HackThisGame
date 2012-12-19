/*jshint jquery:true */

define(
    [   'assetManifest',
        'assets',
        'input',
        'util'],
    function(assetManifest, assets, input, util) {
        'use strict';

        // Get requestFrameAnimation equivalent
        var requestAnimationFrame   = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        var canvas          = $('#game');
        var context         = canvas[0].getContext('2d');
        var canvasWidth     = canvas.width();
        var canvasHeight    = canvas.height();

        var mouseState      = input.mouseState(canvas);         // Track mouse state
        var trackFPS        = util.trackFPS($('#fps'));         // FPS tracking

        // The game's state
        var gameState           = {};
        gameState.menuLayout    = 'menu:layout';


        /* Module api */
        var game    = {};


        /* Base render function */
        game.render = function() {

            // Clear canvas & reset default cursor
            context.clearRect(0, 0, canvasWidth, canvasHeight);
            canvas.css('cursor', 'default');


            // Menu Layout
            var layoutData  = assets.get(gameState.menuLayout).data;


            var source;
            var dest;


            // Draw Menu Background
            source  = assets.get(layoutData.background.ns).frames.base;
            dest    = layoutData.background;
            context.drawImage(
                    assets.get(layoutData.background.ns).asset,
                    source.x, source.y, source.width, source.height,
                    dest.x,   dest.y,   dest.width,   dest.height);

            // Draw Menu Elements
            var curElem;
            for(var i = 0; i < layoutData.elements.length; i++) {
                curElem = layoutData.elements[i];

                dest    = curElem.dest;

                // Coordinates for hover & mouse down
                if(mouseState.x >= dest.x && mouseState.x < (dest.x + dest.width) && mouseState.y >= dest.y && mouseState.y < (dest.y + dest.height)) {
                    canvas.css('cursor', 'pointer');
                    if(!mouseState.down) {
                        source  = assets.get(curElem.ns).frames.hover;
                    }
                    else {
                        source  = assets.get(curElem.ns).frames.click;
                    }
                }

                // Coordinates for standard
                else {
                    source  = assets.get(curElem.ns).frames.base;
                }

                // Render element
                context.drawImage(
                        assets.get(curElem.ns).asset,
                        source.x, source.y, source.width, source.height,
                        dest.x, dest.y, dest.width, dest.height);
            }

            requestAnimationFrame(game.render);

            trackFPS();
        };


        /* Initialise the game. */
        game.init = function() {
            input.init();

            // When assets are loaded begin animating
            var assetsLoaded    = function() {
                requestAnimationFrame(game.render);
            };
            assets.load('menu_assets', assetManifest, assetsLoaded);

            canvas.on('game:click', game.handleClick);
        };


        game.handleClick    = function(event, clickX, clickY) {
            var layoutData  = assets.get(gameState.menuLayout).data;
            var dest;
            for(var i = 0; i < layoutData.elements.length; i++) {
                dest    = layoutData.elements[i].dest;

                if(clickX >= dest.x && clickX < (dest.x + dest.width) && clickY >= dest.y && clickY < (dest.y + dest.height)) {
                    canvas.trigger(layoutData.elements[i].trigger);
console.log(layoutData.elements[i].trigger);
                }
            }
        }


        return game;
    }
);
