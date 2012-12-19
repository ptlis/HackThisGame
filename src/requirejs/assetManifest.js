/*jshint jquery:true */

define(
    [],
    function() {
        'use strict';

        var assets  = [

           // Shared menu items
               {
                   type:   'image',
                   path:   'images/menu/back.png',
                   ns:     'menu:back',
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

            // Root Menu Assets
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
                            trigger:    {
                                event:  'game:menu:change',
                                params: ['game:continue']
                            },
                            dest:   {
                                x:      275,
                                y:      195,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:root:new_game',
                            trigger:    {
                                event:  'game:menu:change',
                                params: ['menu:new_game']
                            },
                            dest:   {
                                x:      275,
                                y:      265,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:root:options',
                            trigger:    {
                                event:  'game:menu:change',
                                params: ['game:options']
                            },
                            dest:   {
                                x:      275,
                                y:      335,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:root:fork_me',
                            trigger:    {
                                event:  'game:menu:open_url',
                                params: ['https://github.com/ptlis/HackThisGame']
                            },
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


        // New game menu assets
            {
                type:   'image',
                path:   'images/menu/new_game/slot_a.png',
                ns:     'menu:new_game:slot_a',
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
                path:   'images/menu/new_game/slot_b.png',
                ns:     'menu:new_game:slot_b',
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
                path:   'images/menu/new_game/slot_c.png',
                ns:     'menu:new_game:slot_c',
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
                path:   'images/menu/new_game/background.png',
                ns:     'menu:new_game:background',
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
                        {
                            ns:         'menu:new_game:slot_a',
                            trigger:    {
                                event:  'game:set_save_slot',
                                params: ['slot_a']
                            },
                            dest:   {
                                x:      275,
                                y:      195,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:new_game:slot_b',
                            trigger:    {
                                event:  'game:set_save_slot',
                                params: ['slot_b']
                            },
                            dest:   {
                                x:      275,
                                y:      265,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:new_game:slot_c',
                            trigger:    {
                                event:  'game:set_save_slot',
                                params: ['slot_c']
                            },
                            dest:   {
                                x:      275,
                                y:      335,
                                width:  250,
                                height: 70
                            }
                        },
                        {
                            ns:         'menu:back',
                            trigger:    {
                                event:  'game:menu:change',
                                params: ['menu:root']
                            },
                            dest:   {
                                x:      275,
                                y:      440,
                                width:  250,
                                height: 70
                            }
                        }
                    ]
                }
            },
            {
                type:   'image',
                path:   'images/menu/customise_save/background.png',
                ns:     'menu:customise_save:background',
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
                ns:     'menu:customise_save:layout',
                data:   {
                    background : {
                        ns:     'menu:customise_save:background',
                        x:      0,
                        y:      0,
                        width:  800,
                        height: 600
                    },
                    elements : [
                                {
                        ns:         'menu:back',
                        trigger:    {
                            event:  'game:menu:change',
                            params: ['menu:new_game']
                        },
                        dest:   {
                            x:      275,
                            y:      440,
                            width:  250,
                            height: 70
                        }
                    }
                    ]

                }
            }

        ];

        return assets;
    }
);
