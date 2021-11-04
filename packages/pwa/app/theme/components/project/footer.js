/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {background} from '@chakra-ui/styled-system'

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
        'service',
        'wrapper',
        'bgWrapper',
        'section',
        'listgrid',
        'subscribe',
        'subscribeField',
        'subscribeButtonContainer',
        'subscribeHeading',
        'subscribeMessage',
        'localeSelector',
        'bottomHalf',
        'horizontalRule',
        'copyright',
        'socialIcons'
    ],
    baseStyle: {
        container: {
            width: 'full',
            background: 'white',
            borderTop: '1px solid #bebebe',
            position: 'relative'
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
            zIndex: '-2'
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
        service: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            py: 4
        },
        listgrid: {
            borderRight: '1px solid #bebebe',
            paddingTop: 6,
            paddingBottom: 6
        },
        subscribe: {
            maxWidth: {base: '21.5rem', lg: 'none'}
        },
        subscribeField: {
            background: 'white',
            color: 'gray.900'
        },
        subscribeButtonContainer: {
            width: 'auto'
        },
        subscribeHeading: {
            fontSize: 'md',
            marginBottom: 2
        },
        subscribeMessage: {
            fontSize: 'sm',
            marginBottom: 4
        },
        localeSelector: {
            display: 'inline-block',
            marginTop: 8,
            marginBottom: 5
        },
        localeDropdown: {
            background: 'gray.800',
            _hover: {
                background: 'whiteAlpha.500'
            }
        },
        bottomHalf: {
            maxWidth: {base: '34.5rem', lg: '100%'}
        },
        horizontalRule: {
            marginBottom: 4
        },
        copyright: {
            fontSize: 'sm',
            marginBottom: 6,
            color: 'gray.50'
        },
        socialIcons: {
            marginTop: 4
        }
    }
}
