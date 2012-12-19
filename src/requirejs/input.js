/*jshint jquery:true */

define(
    [   'jquery'],
    function($) {
        'use strict';

        var input   = {};


        /*  Keeps track of the mouse state over the canvas. */
        input.mouseState   = function(canvasElem) {
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


        input.init = function() {
            var canvas  = $('#game');

            canvas.on('click', function(event) {
                var offset  = $(this).offset();

                var clickX  = event.pageX - offset.left;
                var clickY  = event.pageY - offset.top;

                canvas.trigger('game:click', [clickX, clickY]);
            });
        };


        return input;
    }
);
