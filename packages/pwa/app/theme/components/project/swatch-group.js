/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: () => ({
        swatchGroup: {
            flexDirection: 'column '
        },
        swatchLabel: {
            marginBottom: 3
        },
        swatch: {
            position: 'relative',
            _focus: {
                outline: 'none'
            }
        },
        swatchesWrapper: {
            flexWrap: 'wrap'
        },
        swatchButton: {
            borderColor: 'gray.200',
            _disabled: {
                opacity: 1
            }
        }
    }),
    variants: {
        circle: (props) => ({
            swatch: {
                bg: 'none',
                // borderRadius: 'full',
                padding: 0,
                cursor: 'pointer',
                marginRight: 2,
                marginLeft: 0,
                marginBottom: 2,
                color: `${props.selected ? 'black' : 'gray.200'}`,
                // border: `${props.selected ? '1px' : '0'}`,
                _hover: {
                    borderColor: `${props.selected ? 'black' : 'none'}`,
                    borderWidth: `${props.selected ? '1' : 0}`,
                    borderStyle: 'solid'
                },
                _active: {
                    background: 'transparent'
                }
                // _before: {
                //     content: '""',
                //     display: `${props.disabled ? 'block' : 'none'}`,
                //     position: 'absolute',
                //     height: 11,
                //     width: '1px',
                //     transform: 'rotate(45deg)',
                //     backgroundColor: 'black',
                //     zIndex: 1
                // }
            },
            swatchButton: {
                height: 4,
                width: 4,
                overflow: 'hidden',
                minWidth: 'auto',
                opacity: 1,
                _focus: {
                    outline: 'none'
                }
            }
        }),
        square: (props) => ({
            swatch: {
                h: 'auto',
                minH: '45px',
                marginRight: 2,
                // diagonal line for disabled options
                // theme variable like gray.200 won't work inside linear-gradient
                backgroundImage: `${
                    props.disabled
                        ? `${
                              props.selected
                                  ? 'linear-gradient(to top left, transparent calc(50% - 1px), black, transparent calc(50% + 1px) )'
                                  : 'linear-gradient(to top left, white calc(50% - 1px), #c9c9c9, white calc(50% + 1px) )'
                          } `
                        : ''
                }`,
                borderColor: `${props.selected ? 'black' : 'gray.200'}`,
                borderStyle: 'solid',
                borderWidth: 1,
                paddingLeft: 3,
                paddingRight: 3,
                marginBottom: 2,
                _focus: {outline: 'none'},
                _hover: {
                    textDecoration: 'none',
                    borderColor: 'gray.900'
                },
                _active: {
                    borderColor: 'gray.900'
                },
                backgroundColor: `${
                    props.colorMode === 'light'
                        ? props.selected
                            ? props.disabled
                                ? 'gray.100'
                                : 'black'
                            : 'white'
                        : props.selected
                        ? props.disabled
                            ? 'gray.100'
                            : 'white'
                        : '#222'
                }`,
                color: `${
                    props.colorMode === 'light'
                        ? props.selected && !props.disabled
                            ? 'white'
                            : 'gray.900'
                        : props.selected && !props.disabled
                        ? 'black'
                        : 'white'
                }`
            },
            swatchButton: {}
        })
    },
    parts: ['swatch', 'swatchItem']
}
