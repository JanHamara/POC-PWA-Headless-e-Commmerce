/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

export default {
    baseStyle: {
        bg: 'black',
        color: 'white',
        w: 'auto',
        minH: '60px',
        h: '60px',
        px: 8,
        fontFamily: 'body',
        textTransform: 'uppercase',
        fontSize: '2xs',
        borderRadius: 0,
        fontWeight: 'medium',
        letterSpacing: 'widest',
        _hover: {bg: 'gray.800', _disabled: {bg: 'whiteAlpha.300'}}
    },
    variants: {
        solid: (props) =>
            props.colorMode === 'light'
                ? {
                      px: 8,
                      fontSize: '2xs',
                      bg: 'black',
                      color: 'white',
                      _hover: {bg: 'gray.900', _disabled: {bg: 'gray.300'}},
                      _active: {bg: 'black'},
                      _disabled: {bg: 'gray.300'}
                  }
                : {
                      px: 8,
                      fontSize: '2xs',
                      bg: 'white',
                      color: 'black',
                      _hover: {bg: 'whiteAlpha.800', _disabled: {bg: 'whiteAlpha.300'}},
                      _active: {bg: 'white'},
                      _disabled: {bg: 'whiteAlpha.300'}
                  },
        outline: (props) =>
            props.colorMode === 'light'
                ? {
                      px: 8,
                      fontSize: '2xs',
                      bg: 'none',
                      color: 'black',
                      _hover: {bg: 'gray.100', _disabled: {bg: 'none', color: 'black'}},
                      _active: {bg: 'none', color: 'black'},
                      _disabled: {bg: 'none', color: 'gray.800'}
                  }
                : {
                      px: 8,
                      fontSize: '2xs',
                      bg: 'none',
                      color: 'white',
                      _hover: {bg: 'gray.200', _disabled: {bg: 'none', color: 'whiteAlpha.500'}},
                      _active: {bg: 'none', color: 'white'},
                      _disabled: {bg: 'none', color: 'whiteAlpha.500'}
                  },
        ghost: (props) =>
            props.colorMode === 'light'
                ? {
                      px: 8,
                      fontSize: '2xs',
                      bg: 'none',
                      color: 'black',
                      border: 'none',
                      outline: 'none',
                      _hover: {
                          bg: 'none',
                          textDecoration: 'underline',
                          _disabled: {bg: 'none', color: 'gray.800'}
                      },
                      _active: {bg: 'none', color: 'black'},
                      _disabled: {bg: 'none', color: 'gray.800'}
                  }
                : {
                      px: 8,
                      fontSize: '2xs',
                      bg: 'none',
                      color: 'white',
                      border: 'none',
                      outline: 'none',
                      _hover: {bg: 'gray.900', _disabled: {bg: 'none', color: 'whiteAlpha.500'}},
                      _active: {bg: 'none', color: 'white'},
                      _disabled: {bg: 'none', color: 'whiteAlpha.500'}
                  },
        unstyled: {
            minW: 'auto',
            minH: 'auto',
            w: 6,
            h: 6,
            m: 0,
            lineHeight: 0,
            _hover: {
                background: 'transparent'
            }
        },
        swatch: {
            minW: 'auto',
            minH: 'auto',
            w: 4,
            h: 4,
            m: 0,
            lineHeight: 0,
            _hover: {
                background: 'transparent'
            }
        },
        footer: {
            fontSize: '4xs',
            minH: 'auto',
            h: 'auto',
            w: 'fit-content',
            py: 2,
            fontWeight: 'semibold'
        },
        mobileFilter: {
            flex: 1,
            minH: '49px',
            h: '49px',
            px: 0,
            fontSize: 'base',
            fontWeight: 'semibold',
            textStyle: 'menu',
            bg: 'none',
            color: 'black',
            border: '1px black solid',
            _hover: {bg: 'none', _disabled: {bg: 'none', color: 'black'}},
            _active: {bg: 'none', color: 'black'},
            _disabled: {bg: 'none', color: 'gray.800'}
        }
    }
}
