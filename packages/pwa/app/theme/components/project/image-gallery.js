/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const switchBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%) scale(.8, 1.8)',
    cursor: 'pointer',
    boxSize: 12
}

export default {
    baseStyle: {
        container: {},
        heroImage: {
            maxH: {base: '530px', md: '740px'}
        },
        heroImageGroup: {
            minW: {base: 'full', lg: '400px', '2xl': '640px'},
            w: {base: 'full', lg: '400px', '2xl': '640px'},
            position: 'relative'
        },
        heroImageRightSwitch: {
            ...switchBase,
            right: '0%'
        },
        heroImageLeftSwitch: {
            ...switchBase,
            left: {base: '0%', md: '5%'}
        },
        heroImageSkeleton: {
            marginBottom: 2
        },
        thumbnailImageGroup: {},
        thumbnailImageItem: {
            // flexShrink: 0,
            cursor: 'pointer',
            // flexBasis: [20, 20, 24],
            border: 0,
            marginBottom: [1, 2, 3, 6],
            marginRight: [1, 1, 2, 2],
            _focus: {
                boxShadow: 'outline'
            },
            _focusVisible: {
                outline: 0
            }
        },
        thumbnailImageSkeleton: {
            marginRight: 2,
            width: [20, 20, 24, 24]
        }
    },
    defaultProps: {
        size: 'md'
    },
    parts: ['container', 'heroImageGroup', 'heroImage', 'heroImageSkeleton', 'thumbnailImageGroup']
}
