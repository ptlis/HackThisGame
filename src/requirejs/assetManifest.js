/*jshint jquery:true */

define(
    [],
    function() {
        'use strict';

        var assets  = [
            // Menu Assets
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
            },
            {
                type:   'image',
                path:   'images/menu/background.png',
                ns:     'menu:background',
                frames: {
                    base:   {
                        x:      0,
                        y:      0,
                        width:  800,
                        height: 600
                    }
                }
            },
            {
                type:   'json',
                ns:     'menu:layout',
                data:   {
                    'background' : {
                        ns:     'menu:background',
                        x:      0,
                        y:      0,
                        width:  800,
                        height: 800
                    },
                    'elements' : [
                        {
                            ns:     'menu:continue',
                            x:      275,
                            y:      195,
                            width:  250,
                            height: 70
                        },
                        {
                            ns:     'menu:new_game',
                            x:      275,
                            y:      265,
                            width:  250,
                            height: 70
                        },
                        {
                            ns:     'menu:options',
                            x:      275,
                            y:      335,
                            width:  250,
                            height: 70
                        }
                    ]
                }
            }

        ];

        return assets;
    }
);
