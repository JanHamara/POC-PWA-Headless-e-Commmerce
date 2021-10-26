/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const mdSize = {height: 11, borderRadius: 'base'}

export default {
    baseStyle: {
        field: {
            _focus: {
                borderColor: 'blue.600'
            }
        }
    },
    sizes: {
        md: {
            field: {...mdSize, px: 3},
            addon: mdSize
        }
    },
    variants: {
        search: {
            // search input
            field: {
                backgroundColor: 'none',
                color: 'gray.700',
                fontStyle: 'italic',
                fontSize: 'xs',
                _focus: {
                    backgroundColor: 'none'
                },
                _hover: {
                    backgroundColor: 'none',
                    _focus: {
                        backgroundColor: 'none'
                    }
                },
                _placeholder: {
                    color: 'gray.600',
                    fontStyle: 'italic',
                    fontSize: '2xs'
                }
            }
        },
        filled: {
            field: {
                backgroundColor: 'gray.50',
                _focus: {
                    backgroundColor: 'white'
                },
                _hover: {
                    backgroundColor: 'gray.100',
                    _focus: {
                        backgroundColor: 'white'
                    }
                },
                _placeholder: {
                    color: 'gray.700'
                }
            }
        }
    }
}
