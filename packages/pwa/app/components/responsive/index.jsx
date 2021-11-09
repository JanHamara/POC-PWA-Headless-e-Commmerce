/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '@chakra-ui/react'

/**
 * Render the children in the DOM but visually hide them on desktop
 * @param children - isomorphic components used within a responsive design
 */
export const HideOnDesktop = ({children, fw = false, fh = false}) => (
    <Box
        display={{base: 'block', md: 'none'}}
        width={fw ? 'full' : 'auto'}
        height={fh ? 'full' : 'auto'}
    >
        {children}
    </Box>
)
HideOnDesktop.propTypes = {children: PropTypes.node, fw: PropTypes.bool, fh: PropTypes.bool}

export const BelowXL = ({children, fw = false, fh = false}) => (
    <Box
        display={{base: 'block', xl: 'none'}}
        width={fw ? 'full' : 'auto'}
        height={fh ? 'full' : 'auto'}
    >
        {children}
    </Box>
)
BelowXL.propTypes = {children: PropTypes.node, fw: PropTypes.bool, fh: PropTypes.bool}

export const BelowLG = ({children, fw = false, fh = false}) => (
    <Box
        display={{base: 'block', lg: 'none'}}
        width={fw ? 'full' : 'auto'}
        height={fh ? 'full' : 'auto'}
    >
        {children}
    </Box>
)
BelowLG.propTypes = {children: PropTypes.node, fw: PropTypes.bool, fh: PropTypes.bool}

/**
 * Render the children in the DOM but visually hide them on mobile
 * @param children - isomorphic components used within a responsive design
 */
export const HideOnMobile = ({children, fw = false, fh = false}) => (
    <Box
        display={{base: 'none', md: 'block'}}
        width={fw ? 'full' : 'auto'}
        height={fh ? 'full' : 'auto'}
    >
        {children}
    </Box>
)
HideOnMobile.propTypes = {children: PropTypes.node, fw: PropTypes.bool, fh: PropTypes.bool}

export const AboveXL = ({children, fw = false, fh = false}) => (
    <Box
        display={{base: 'none', xl: 'block'}}
        width={fw ? 'full' : 'auto'}
        height={fh ? 'full' : 'auto'}
    >
        {children}
    </Box>
)
AboveXL.propTypes = {children: PropTypes.node, fw: PropTypes.bool, fh: PropTypes.bool}

export const AboveLG = ({children, fw = false, fh = false}) => (
    <Box
        display={{base: 'none', lg: 'block'}}
        width={fw ? 'full' : 'auto'}
        height={fh ? 'full' : 'auto'}
    >
        {children}
    </Box>
)
AboveLG.propTypes = {children: PropTypes.node, fw: PropTypes.bool}

export default {HideOnMobile, HideOnDesktop, BelowXL, AboveXL, BelowLG, AboveLG}
