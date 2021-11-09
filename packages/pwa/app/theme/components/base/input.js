/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const inputBase = {
    backgroundColor: 'none',
    background: 'transparent',
    borderRadius: 'none',
    border: '1px #bebebe solid',
    h: 7,
    px: 4,
    _focus: {
        outline: 'none',
        boxShadow: 'none'
    }
}
const lgSize = {...inputBase, h: 12, fontSize: 'xs'}
const mdSize = {...inputBase, h: 10, fontSize: '2xs'}
const smSize = {...inputBase, h: 7, fontSize: '3xs'}

export default {
    baseStyle: {
        field: {
            color: 'black',
            p: 0,
            borderRadius: 'none',
            borderColor: '#bebebe',
            textStyle: 'baseThin',
            boxShadow: 'none',
            _placeholder: {
                color: 'gray.800',
                textStyle: 'baseThin',
                fontSize: '3xs'
            },
            _focus: {
                outline: 'none',
                boxShadow: 'none'
            }
        }
    },
    sizes: {
        lg: {
            field: {...lgSize}
        },
        md: {
            field: {...mdSize}
        },
        sm: {
            field: {
                field: {...smSize}
            }
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
                border: 0,
                textTransform: 'none',
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
                    fontSize: '2xs',
                    textTransform: 'none'
                }
            }
        },
        footer: {
            _field: {
                ...inputBase,
                h: 9,
                minH: 9,
                fontSize: '3xs',
                _placeholder: {
                    color: 'gray.500'
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
