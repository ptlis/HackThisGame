/*jshint jquery:true */


requirejs.config({
    shim: {
    }
});

require(
    [   'game'],

    function(game) {
        game.init();
    }
);
