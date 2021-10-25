/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {extendTheme} from '@chakra-ui/react'

// Global Style Overrides
import globals from './globals'

// Foundational Style Overrides
import colors from './foundations/colors'
import fonts from './foundations/fonts'
import fontSizes from './foundations/fontSizes'
import layerStyles from './foundations/layerStyles'
import textStyles from './foundations/textStyles'
import breakpoints from './foundations/breakpoints'

// Component Style Overrides - Base Components
import Button from './components/base/button'

// Component Style Overrides - Project Components

const overrides = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    globals,
    colors,
    fonts,
    fontSizes,
    layerStyles,
    textStyles,
    breakpoints,
    components: [Button]
}

export default extendTheme(overrides)
