/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            w: 'full',
            minH: {base: '500px', md: 'full'}
        },
        wrapper: {
            position: 'relative',
            w: 'full',
            h: 'full'
        },
        image: {
            position: 'absolute',
            w: 'full',
            h: 'auto'
        },
        stack: {
            spacing: 8,
            justifyContent: 'center',
            zIndex: 3
        },
        title: {
            textStyle: 'secondaryItalic',
            textAlign: 'center',
            maxW: '90%',
            mx: 'auto',
            fontWeight: 'semibold',
            color: 'white'
        },
        subtitle: {
            textStyle: 'baseRegular',
            textAlign: 'center',
            maxW: '90%',
            mx: 'auto',
            color: 'white',
            letterSpacing: 'wider'
        },
        button: {}
    },
    parts: ['container', 'wrapper', 'image', 'title', 'subtitle', 'button']
}
