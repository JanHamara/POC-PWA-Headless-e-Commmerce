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

export default {
    baseStyle: {
        bg: 'transparent'
    },
    variants: {
        nodecoration: {
            textTransform: 'uppercase',
            _hover: {textDecoration: 'underline'}
        },
        primary: {
            ...linkBase,
            display: 'inline-block',
            fontSize: '3xs',
            fontWeight: 'semibold',
            letterSpacing: 'widest',
            textTransform: 'uppercase',
            textDecoration: 'none',
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
            fontSize: '3xs',
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
            fontSize: '3xs',
            // color: props.colorMode === 'dark' ? 'white' : 'gray.400',
            color: 'gray.400',
            _hover: {
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '3px',
                textDecorationColor: 'black'
            }
        }
    }
}
