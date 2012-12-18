/*jshint jquery:true */

define(
    [],
    function() {
        'use strict';
        
        var assets  = [
            {
                type:   'image',
                path:   'images/menu/new_game.png',
                ns:     'menu:new_game',
                frames: {
                    base:   {
                        x:      0,
                        y:      0,
                        width:  250,
                        height: 70    
                    },
                    hover:  {
                        x:      0,
                        y:      70,
                        width:  250,
                        height: 70    
                    },
                    click:  {
                        x:      0,
                        y:      140,
                        width:  250,
                        height: 70    
                    }
                }
            },
            {
                type:   'image',
                path:   'images/menu/continue.png',
                ns:     'menu:continue',
                frames: {
                    base:   {
                        x:      0,
                        y:      0,
                        width:  250,
                        height: 70    
                    },
                    hover:  {
                        x:      0,
                        y:      70,
                        width:  250,
                        height: 70    
                    },
                    click:  {
                        x:      0,
                        y:      140,
                        width:  250,
                        height: 70    
                    }
                }
            },
            {
                type:   'image',
                path:   'images/menu/options.png',
                ns:     'menu:options',
                frames: {
                    base:   {
                        x:      0,
                        y:      0,
                        width:  250,
                        height: 70    
                    },
                    hover:  {
                        x:      0,
                        y:      70,
                        width:  250,
                        height: 70    
                    },
                    click:  {
                        x:      0,
                        y:      140,
                        width:  250,
                        height: 70    
                    }
                }
            }
        ];
        
        return assets;
    }
);
