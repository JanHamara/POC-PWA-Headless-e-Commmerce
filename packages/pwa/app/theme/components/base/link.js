/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const linkBase = {
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'semibold',
    letterSpacing: 'wide',
    cursor: 'pointer'
}

const unstyledBase = {
    display: 'inline-block',
    fontSize: '4xs',
    fontWeight: 'semibold',
    letterSpacing: 'widest',
    textTransform: 'uppercase',
    textDecoration: 'none'
}

export default {
    baseStyle: {
        bg: 'transparent'
    },
    variants: {
        unstyled: {
            ...linkBase,
            ...unstyledBase,
            _hover: {
                textDecoration: 'none'
            }
        },
        nodecoration: {
            textTransform: 'uppercase',
            _hover: {textDecoration: 'underline'}
        },
        primary: {
            ...linkBase,
            ...unstyledBase,
            position: 'relative',
            _after: {
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: '100%',
                height: '0.1em',
                backgroundColor: 'gray.800',
                opacity: 0,
                transition: 'opacity 300ms, transform 300ms',
                transform: 'scale(0)',
                transformOrigin: 'center'
            },
            _hover: {
                textDecoration: 'none',
                _after: {
                    opacity: 1,
                    transform: 'scale(1)'
                }
            },
            _focus: {
                _after: {
                    opacity: 1,
                    transform: 'scale(1)'
                }
            }
        },
        secondary: {
            ...linkBase,
            fontSize: '4xs',
            textDecoration: 'underline',
            fontWeight: 'normal'
        },
        menu: {
            ...linkBase,
            textTransform: 'uppercase',
            _hover: {
                textDecoration: 'underline',
                textDecorationThickness: '5px',
                textUnderlineOffset: '7px'
            }
        },
        submenu: {
            ...linkBase,
            fontSize: '4xs',
            // color: props.colorMode === 'dark' ? 'white' : 'gray.400',
            color: 'gray.400',
            fontWeight: 'regular',
            letterSpacing: 'normal'
            // _hover: {
            //     textDecoration: 'underline',
            //     textDecorationThickness: '1px',
            //     textUnderlineOffset: '3px',
            //     textDecorationColor: 'black'
            // }
        },
        gray: {
            ...linkBase,
            fontSize: '4xs',
            color: 'gray.500',
            fontWeight: 'normal',
            textDecoration: 'none',
            textTransform: 'uppercase',
            _hover: {
                textDecoration: 'none'
            }
        }
    }
}
