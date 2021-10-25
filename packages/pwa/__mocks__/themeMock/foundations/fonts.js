/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {theme as base} from '@chakra-ui/react'

// TO DO: https://chakra-ui.com/guides/using-fonts
// yarn add @fontsource/playfair-display
// yarn add @fontsource/source-sans-pro

// Need to import relevant font weights and styles into the same root file with Chakra Provider
// Use Option 2 of implementation with @font-face

export default {
    body: `Source Sans Pro, ${base.fonts?.body}`, // converts to --chakra-fonts-fontFamilies-primary
    heading: `Playfair Display, ${base.fonts?.heading}`,
    mono: 'monospace',
    serif: 'sans-serif'
}
