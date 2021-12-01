/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {
            borderBottom: 0
        },
        button: {
            textStyle: 'baseRegular',
            paddingLeft: 4,
            minHeight: '45px',
            fontSize: '2xs',

            _expanded: {
                color: 'black',
                fontWeight: 'semibold',
                borderTop: '1.5px #000000 solid'
            },

            _hover: {
                background: 'none'
            }
        },
        panel: {
            paddingLeft: 4,
            paddingRight: 4,
            paddingBottom: 5,
            textStyle: 'secondaryRegular',
            fontSize: '3xs'
        }
    },
    variants: {
        filter: {
            button: {
                py: 0,
                justifyContent: 'space-between',
                _expanded: {
                    borderTop: '1px gray.200 solid',
                    paddingBottom: 0
                }
            },
            panel: {
                fontSize: '4xs',
                padding: 0,
                marginLeft: 4,
                marginRight: 4,
                marginBottom: 5
            }
        }
    }
}
