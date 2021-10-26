/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            minWidth: 'xs',
            width: 'full',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: 4,
            display: {base: 'none', lg: 'flex'}
        },
        stackContainer: {
            whiteSpace: 'nowrap',
            flexWrap: 'wrap'
        },
        popoverContent: {
            marginLeft: 'auto',
            marginRight: 'auto',
            border: 0,
            boxShadow: 'xl',
            paddingTop: 3,
            paddingRight: 4,
            paddingBottom: 4,
            paddingLeft: 4,
            minWidth: '100%',
            borderRadius: 0,
            position: 'absolute'
        },
        popoverContainer: {
            paddingTop: 0,
            paddingBottom: 8,
            maxWidth: 'container.xxxl'
        },
        listMenuTriggerContainer: {
            display: 'flex',
            alignItems: 'center'
        },
        listMenuTriggerLink: {
            display: 'block',
            whiteSpace: 'nowrap',
            position: 'relative',
            paddingTop: 3,
            paddingRight: 4,
            paddingBottom: 2,
            paddingLeft: 4
        },
        // listMenuTriggerLinkWithIcon: {marginRight: 3},
        listMenuTriggerLinkActive: {},
        listMenuTriggerLinkIcon: {
            marginTop: 3,
            // marginRight: 4,
            marginBottom: 2
            // marginLeft: 1,
        }
    },
    parts: [
        'container',
        'stackContainer',
        'popoverContent',
        'popoverContainer',
        'listMenuTriggerContainer',
        'listMenuTriggerLink',
        'listMenuTriggerLinkActive',
        'listMenuTriggerIcon'
    ]
}
