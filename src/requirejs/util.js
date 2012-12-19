/*jshint jquery:true */

define(
    [],
    function() {
        'use strict';

        var util    = {};


        util.canvasSupported    = function () {
            var elem    = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        };


        /*  Closure that creates a collector that executes the provided callback
            when the required number of calls have been made. */
        util.collector    = function(expectedCount, completeCallback, progressCallback) {
            var receivedCount   = 0;
            return function() {
                receivedCount   += 1;
                if(progressCallback) {
                    progressCallback(receivedCount, expectedCount);
                }
                if(receivedCount === expectedCount) {
                    completeCallback();
                }
            };
        };


        /*  Closure that creates a function to track fps & update the provided
            element with the current value. */
        util.trackFPS   = function(fpsElem) {
            var lastTime    = new Date();
            var frameCount  = 0;
            return function() {
                var nowTime     = new Date();
                var diffTime    = Math.ceil(nowTime.getTime() - lastTime.getTime());
                if(diffTime > 1000) {
                    fpsElem.text('fps: ' + frameCount);
                    frameCount  = 0;
                    lastTime    = nowTime;
                }
                frameCount++;
            };
        };


        /*  Helper function that handles asynchronous asset loading & calls
            callback on completion */
        util.loadAssets = function(assetManifest, completeCallback, progressCallback) {
            var collector   = util.collector(assetManifest.length, completeCallback, progressCallback);
            var assets      = {};
            for(var i = 0; i < assetManifest.length; i++) {
                var ns              = assetManifest[i].ns;
                delete(assetManifest[i].ns);
                switch(assetManifest[i].type) {
                    case 'image':
                        assets[ns]              = assetManifest[i];
                        assets[ns].asset        = new Image();
                        assets[ns].asset.onload = collector;
                        assets[ns].asset.src    = assetManifest[i].path;
                        break;

                    case 'json':
                        assets[ns]              = assetManifest[i];
                        collector();
                        break;

                    default:
                        throw 'Invalid type "' + assetManifest[i].type + '" provided.';
                }
            }

            return assets;
        };


        /*  Keeps track of the mouse state over the canvas. */
        util.mouseManager   = function(canvasElem) {
            var manager = {
                x:      -1,
                y:      -1,
                down:   false
            };

            var mouseMove = function(event) {
                var offset  = $(this).offset();

                manager.x   = event.pageX - offset.left;
                manager.y   = event.pageY - offset.top;
            };

            var mouseLeave = function(event) {
                manager.x   = -1;
                manager.y   = -1;
            };

            var mouseDown = function(event) {
                manager.down    = true;
            };

            var mouseUp = function(event) {
                manager.down    = false;
            };

            canvasElem.on('mousemove',  mouseMove);
            canvasElem.on('mouseleave', mouseLeave);
            canvasElem.on('mousedown',  mouseDown);
            canvasElem.on('mouseup',    mouseUp);

            return manager;
        };


        return util;
    }
);
