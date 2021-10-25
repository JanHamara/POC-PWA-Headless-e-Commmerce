/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {theme as base} from '@chakra-ui/react'

// https://chakra-ui.com/guides/using-fonts

export default {
    heading: `Playfair Display, ${base.fonts?.heading}`, // converts to --chakra-fonts-fontFamilies-primary
    body: `Source Sans Pro, ${base.fonts?.body}`,
    mono: 'monospace',
    serif: 'sans-serif'
}
