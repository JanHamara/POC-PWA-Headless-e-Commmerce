/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    parts: ['container', 'list', 'listItem', 'listItemSx', 'heading'],
    baseStyle: {
        container: {
            // color: 'white'
            mb: 6
        },
        headingLink: {
            display: 'inline-flex'
        },
        listItem: {
            lineHeight: 'none'
        },
        heading: {
            fontFamily: 'body',
            textStyle: 'baseHeadingBold',
            fontSize: '4xs',
            mb: 1
        }
    },
    variants: {
        vertical: {},
        horizontal: {
            listItem: {
                borderLeft: '1px solid',
                paddingLeft: 2
            },
            listItemSx: {
                '&:first-of-type': {
                    borderLeft: 0,
                    paddingLeft: 0
                }
            }
        }
    },
    defaultProps: {
        variant: 'vertical'
    }
}
