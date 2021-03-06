/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const barStyle = {
    maxWidth: 'container.xxxxxl',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: {base: 2, lg: 4},
    paddingBottom: {base: 2, lg: 4},
    paddingLeft: {base: 4, md: 8, xl: 10, max: 4},
    paddingRight: {base: 4, md: 8, xl: 10, max: 4}
}

const containerBase = {
    height: 'full',
    minWidth: 'xs',
    width: 'full',
    boxShadow: 'base'
}

export default {
    baseStyle: {
        container: {
            ...containerBase
        },
        containerBordered: {
            ...containerBase,
            borderTop: '1px solid #bebebe',
            borderBottom: '1px solid #bebebe'
        },

        // Top Bar
        topbar: {
            ...barStyle,
            maxH: 10,
            h: 10,
            w: 'full',
            paddingTop: {base: 2, md: 1},
            paddingBottom: {base: 2, md: 1},
            size: 'xs',
            fontWeight: 'semibold',
            letterSpacing: 'wide',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        topBarLink: {
            minW: 'fit-content'
        },

        // Main Bar
        mainbar: {
            ...barStyle,
            maxH: {base: '46px', lg: '94px'},
            h: {base: '46px', lg: '94px'},
            display: {base: 'flex', lg: 'block'},
            alignItems: {base: 'center', lg: 'unset'}
        },
        mainbarWrapper: {
            flexwrap: 'nowrap',
            alignItems: {base: 'center', lg: 'flex-end'},
            minH: 'full',
            justifyContent: {base: 'space-between', lg: 'center'}
        },

        // Secondary Bar
        secondarybar: {
            ...barStyle,
            maxWidth: 'container.xxl',
            maxH: '43px',
            h: '43px',
            paddingTop: 0,
            paddingBottom: 0
        },

        // Navigation Comnponents
        searchContainer: {
            order: [2, 2, 2, 'inherit'],
            width: ['full', 'full', 'full', '215px'],
            borderBottom: '1px solid #000000',
            marginBottom: '9px'
        },
        languageSelector: {
            marginBottom: '9px',
            marginRight: 6,
            fontSize: 'xs',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#b4b4b4'
        },
        langSelectorItem: {
            textDecoration: 'none',
            _hover: {
                textDecoration: 'none',
                cursor: 'pointer',
                color: 'gray.900'
            },
            _active: {
                color: 'gray.900'
            }
        },
        iconContainer: {
            order: [3, 3, 3, 'inherit'],
            width: ['full', 'full', 'full', 80],
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginBottom: '9px'
        },
        logo: {
            width: [8, 8, 8, 12],
            height: [6, 6, 6, 8]
        },
        accountIcon: {
            cursor: 'pointer',
            boxSize: 6,
            color: 'gray.500',
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            }
        },
        icons: {
            color: 'gray.500'
        },
        menuIcon: {
            color: 'black',
            width: 6,
            height: 6
        },
        bgclub: {
            width: '72px',
            h: '25px',
            mb: 0.5
        }
        // arrowDown: {
        //     height: 11,
        //     marginRight: 0,
        //     alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
        //     cursor: 'pointer',
        //     _focus: {
        //         boxShadow: 'outline'
        //     },
        //     _focusVisible: {
        //         outline: 0
        //     },
        //     display: ['none', 'none', 'none', 'block']
        // },
        // signout: {
        //     width: '100%',
        //     borderRadius: '4px',
        //     height: 11,
        //     padding: 4,
        //     py: 3,
        //     marginTop: 1,
        //     _hover: {
        //         background: 'gray.50'
        //     }
        // },
        // signoutText: {
        //     fontSize: 'sm',
        //     fontWeight: 'normal'
        // },
        // signoutIcon: {
        //     marginRight: 2
        // }
    },
    parts: [
        'container',
        'containerBordered',
        'topbar',
        'topBarLink',
        'mainbar',
        'mainbarWrapper',
        'secondarybar',
        'searchContainer',
        'bodyContainer',
        'logo',
        'menuIcon',
        'icons',
        'signout'
    ]
}
