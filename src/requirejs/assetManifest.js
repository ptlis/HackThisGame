/*jshint jquery:true */

define(
    [],
    function() {
        'use strict';

        var assets  = [
            // Menu Assets
            {
                type:   'image',
                path:   'images/menu/root/new_game.png',
                ns:     'menu:root:new_game',
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
                    },
                    disabled:   {
                        x:      0,
                        y:      210,
                        width:  250,
                        height: 70
                    }
                }
            },
            {
                type:   'image',
                path:   'images/menu/root/continue.png',
                ns:     'menu:root:continue',
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
                    },
                    disabled:   {
                        x:      0,
                        y:      210,
                        width:  250,
                        height: 70
                    }
                }
            },
            {
                type:   'image',
                path:   'images/menu/root/options.png',
                ns:     'menu:root:options',
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
                    },
                    disabled:   {
                        x:      0,
                        y:      210,
                        width:  250,
                        height: 70
                    }
                }
            },
            {
                type:   'image',
                path:   'images/menu/root/fork_me.png',
                ns:     'menu:root:fork_me',
                frames: {
                    base:   {
                        x:      0,
                        y:      0,
                        width:  141,
                        height: 141
                    },
                    hover:  {
                        x:      0,
                        y:      141,
                        width:  141,
                        height: 141
                    },
                    click:  {
                        x:      0,
                        y:      282,
                        width:  141,
                        height: 141
                    }
                }
            },
            {
                type:   'image',
                path:   'images/menu/root/background.png',
                ns:     'menu:root:background',
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
                ns:     'menu:root:layout',
                data:   {
                    background : {
                        ns:     'menu:root:background',
                        x:      0,
                        y:      0,
                        width:  800,
                        height: 600
                    },
                    elements : [
                        {
                            ns:         'menu:root:continue',
                            trigger:    'game:continue',
                            dest:   {
                                x:      275,
                                y:      195,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:root:new_game',
                            trigger:    'game:new_game',
                            dest:   {
                                x:      275,
                                y:      265,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:root:options',
                            trigger:    'game:options',
                            dest:   {
                                x:      275,
                                y:      335,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:root:fork_me',
                            trigger:    'game:fork_me',
                            dest: {
                                x:      659,
                                y:      0,
                                width:  141,
                                height: 141
                            }
                        }
                    ]
                }
            },
            {
                type:   'json',
                ns:     'menu:new_game:layout',
                data:   {
                    background : {
                        ns:     'menu:new_game:background',
                        x:      0,
                        y:      0,
                        width:  800,
                        height: 600
                    },
                    elements : [
                    ]
                }
            }

        ];

        return assets;
    }
);
