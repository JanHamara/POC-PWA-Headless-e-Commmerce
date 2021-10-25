/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const base = {
    fontFamily: 'body',
    fontSize: 'base',
    fontWeight: 'normal'
}

const subtitle = {
    ...base,
    textTransform: 'uppercase',
    fontWeight: 'medium',
    letterSpacing: 'wider'
}

const heading = {
    ...base
}

const text = {
    ...base
}

const linkBase = {
    fontFamily: 'body',
    fontSize: 'xs',
    fontWeight: 'semibold',
    letterSpacing: 'wide',
    cursor: 'pointer'
}

const linkMenu = {
    ...linkBase,
    textTransform: 'uppercase',
    _hover: {
        textDecoration: 'underline',
        textDecorationThickness: '5px',
        textUnderlineOffset: '6px'
    }
}

const linkSubMenu = (props) => ({
    ...linkBase,
    fontSize: '3xs',
    color: props.colorMode === 'dark' ? 'white' : 'gray.400',
    _hover: {
        textDecoration: 'underline',
        textDecorationThickness: '1px',
        textUnderlineOffset: '3px',
        textDecorationColor: 'black'
    }
})

const linkPrimary = {
    ...linkBase,
    display: 'inline-block',
    fontSize: '3xs',
    letterSpacing: 'widest',
    textTransform: 'uppercase',
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

const linkSecondary = {
    ...linkBase,
    fontSize: '3xs',
    textDecoration: 'underline',
    fontWeight: 'normal'
}

export default {
    base,
    heading,
    subtitle,
    text,

    page: {
        // px: [4, 4, 6, 6, 8],
        // paddingTop: [4, 4, 6, 6, 8],
        // paddingBottom: 32,
        // width: '100%',
        // maxWidth: 'container.xxxl',
        // marginLeft: 'auto',
        // marginRight: 'auto'
    },
    linkMenu,
    linkSubMenu,
    linkPrimary,
    linkSecondary
}
