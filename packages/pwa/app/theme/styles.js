/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export default {
    global: (props) => ({
        'html, body': {
            bg: props.colorMode === 'dark' ? '#222' : 'teal.100',
            color: props.colorMode === 'dark' ? 'white' : '#222'
        },
        '.react-target, .sf-app': {
            bg: 'none'
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: 'heading',
            fontSize: {
                base: '3xl',
                lg: '4xl'
            },
            fontWeight: 'normal',
            lineHeight: 'base'
        },
        h2: {
            fontSize: {
                base: 'lg',
                lg: '3xl'
            }
        },
        h3: {
            fontSize: '2xl'
        },
        h4: {
            fontSize: 'xl'
        },
        h5: {
            fontSize: 'md'
        },
        h6: {
            fontSize: 'sm'
        },
        p: {
            fontFamily: 'body',
            fontSize: '2xs'
        }
    })
}
