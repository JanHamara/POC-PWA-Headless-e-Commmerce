/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const barStyle = {
    maxWidth: 'container.xxxxl',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: [1, 1, 2, 4],
    paddingBottom: [3, 3, 2, 4]
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
        searchContainer: {
            order: [2, 2, 2, 'inherit'],
            width: ['full', 'full', 'full', 60]
        },
        iconContainer: {
            order: [3, 3, 3, 'inherit'],
            width: ['full', 'full', 'full', 60],
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        },
        topbar: {
            ...barStyle,
            maxH: 10,
            h: 10,
            paddingTop: [1],
            paddingBottom: [1],
            size: 'xs',
            fontWeight: 'semibold',
            letterSpacing: 'wide'
        },
        mainbar: {
            ...barStyle,
            maxH: '94px',
            h: '94px'
        },
        secondarybar: {
            ...barStyle,
            maxWidth: 'container.xxl',
            maxH: '43px',
            h: '43px',
            paddingTop: 0,
            paddingBottom: 0
        },
        logo: {
            width: [8, 8, 8, 12],
            height: [6, 6, 6, 8]
        },
        accountIcon: {
            cursor: 'pointer',
            alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            }
        },
        arrowDown: {
            height: 11,
            marginRight: 0,
            alignSelf: ['self-start', 'self-start', 'self-start', 'auto'],
            cursor: 'pointer',
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            },
            display: ['none', 'none', 'none', 'block']
        },
        signout: {
            width: '100%',
            borderRadius: '4px',
            height: 11,
            padding: 4,
            py: 3,
            marginTop: 1,
            _hover: {
                background: 'gray.50'
            }
        },
        signoutText: {
            fontSize: 'sm',
            fontWeight: 'normal'
        },
        signoutIcon: {
            marginRight: 2
        }
    },
    parts: [
        'container',
        'topbar',
        'mainbar',
        'searchContainer',
        'bodyContainer',
        'logo',
        'icons',
        'signout'
    ]
}
