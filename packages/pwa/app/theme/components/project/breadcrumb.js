/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            minHeight: 4,
            fontSize: '4xs',
            fontFamily: 'heading',
            color: 'gray.800'
        },
        icon: {
            display: 'flex',
            boxSize: 4,
            color: 'grey'
        },
        link: {
            paddingTop: 3,
            paddingBottom: 3
        },
        product: {
            textDecoration: 'none',
            color: 'gray.900'
        }
    },
    parts: ['container', 'icon', 'link']
}
