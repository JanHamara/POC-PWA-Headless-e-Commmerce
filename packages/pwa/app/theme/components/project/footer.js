/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    parts: [
        'container',
        'content',
        'wrapper',
        'bgWrapper',

        'footerServices',
        'footerService',
        'footerServiceTitle',
        'footerServiceContent',

        'footerNavGrid',

        'newsletter',
        'newsletterHeading',
        'newsletterSebheading',
        'newsletterMessage',

        'customerService',
        'customerServiceNumber',
        'customerServiceWrapper',

        'copyright',
        'copyrightWrapper',
        'copyrightFlex'
    ],
    baseStyle: {
        container: {
            width: 'full',
            background: 'white',
            borderTop: '1px solid #bebebe',
            position: 'relative'
        },
        content: {
            w: 'full',
            maxWidth: 'container.xxxxxl',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'black',
            paddingLeft: {base: 4, md: 8, xl: 10, max: 4},
            paddingRight: {base: 4, md: 8, xl: 10, max: 4}
        },
        wrapper: {
            position: 'absolute',
            w: 'full',
            h: 'auto'
        },
        bgWrapper: {
            w: '50%',
            h: 'full',
            position: 'absolute',
            left: 0,
            backgroundColor: 'bg',
            zIndex: '-2',
            borderRight: '1px solid #bebebe'
        },

        // Footer Services
        footerServices: {
            flexWrap: {base: 'wrap', xl: 'nowrap'}
        },
        footerService: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            py: 4,
            maxW: {base: 'half', xl: 'auto'},
            minW: {base: 'half', xl: 'auto'},
            spacing: 1
        },
        footerServiceTitle: {
            textStyle: 'baseHeadingBoldShort',
            textAlign: 'center',
            fontSize: {base: '2xs', xl: 'md'}
        },
        footerServiceContent: {
            textAlign: 'center',
            textStyle: 'secondaryRegular',
            fontSize: '3xs',
            fontStyle: 'italic',
            mx: 'auto',
            maxWidth: '240px'
        },

        // Footer Navigation
        footerNavGrid: {
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: {base: 8, md: 0},
            paddingRight: {base: 8, md: 0, xl: 6}
        },

        // Footer Newsletter
        newsletter: {
            backgroundColor: 'bg',
            paddingX: {base: 8, md: 0, xl: 6},
            paddingY: 6
        },
        newsletterHeading: {
            fontSize: 'lg',
            textStyle: 'baseThin',
            marginBottom: 2
        },
        newsletterSubheading: {
            fontSize: 'md',
            textStyle: 'baseThin',
            textAlign: {base: 'center', md: 'left'},
            marginTop: 8,
            marginBottom: 1
        },
        newsletterMessage: {
            fontSize: '3xs',
            textStyle: 'secondaryItalic',
            marginBottom: {base: 0, lg: 4}
        },

        // Customer Service
        customerService: {
            display: {base: 'flex', lg: 'block'},
            flexDirection: 'column',
            alignItems: {base: 'center', md: 'flex-start'},
            paddingLeft: {base: 8, md: 0, xl: 6},
            paddingRight: {base: 8, lg: 0},
            paddingY: 6
        },
        customerServiceNumber: {
            mt: {base: 4, lg: 6},
            justifyContent: 'flex-start',
            h: '40px'
        },
        customerServiceWrapper: {
            alignItems: 'flex-start',
            spacing: 0,
            mt: '-7px',
            ml: 3
        },

        // Copyright Row
        copyright: {
            position: {base: 'static', xl: 'absolute'},
            h: {base: 'auto', md: '50px'},
            bottom: {base: 'unset', xl: '-370px'}
        },
        copyrightWrapper: {
            my: {base: 6, md: 0},
            h: 'full'
        },
        copyrightFlex: {
            h: 'full',
            flexDirection: {base: 'vertical', md: 'horizontal'},
            flexWrap: {base: 'wrap', md: 'nowrap'},
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        copyrightItem: {
            w: {base: 'full', md: 'auto'},
            textAlign: 'center',
            textStyle: 'submenu',
            textTransform: 'uppercase'
        }
    }
}
