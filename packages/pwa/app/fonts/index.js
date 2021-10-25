/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import {Global} from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
      /* latin */
      @font-face {
        font-family: 'SourceSansPro-Regular';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('../static/fonts/SourceSansPro-Regular.ttf') format('ttf'), url('../static/fonts/SourceSansPro-Regular') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* latin */
      @font-face {
        font-family: 'PlayfairDisplay-Regular';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('../static/fonts/PlayfairDisplay-Regular.ttf') format('ttf'), url('../static/fonts/PlayfairDisplay-Regular.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
    />
)

export default Fonts
