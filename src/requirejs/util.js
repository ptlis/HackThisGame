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
        

        return util;
    }
);
