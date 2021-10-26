/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
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
        }
    }
}
