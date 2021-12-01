/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: {
        container: {display: 'flex'},
        label: {
            width: 'full'
        },
        control: {
            mt: 0,
            backgroundColor: 'white',
            borderRadius: 'none',
            borderWidth: '1px',
            padding: 1,
            _checked: {
                backgroundColor: 'black',
                borderColor: 'black',
                _hover: {
                    backgroundColor: 'black',
                    borderColor: 'black'
                }
            },
            _before: {
                content: 'unset'
            },
            _indeterminate: {}
        }
    },
    sizes: {
        md: {
            container: {alignItems: 'flex-start'},
            label: {marginLeft: 3}
        },
        sm: {
            label: {
                fontSize: '4xs'
            }
        }
    }
}
