/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {mode} from '@chakra-ui/theme-tools'

export default {
    global: (props) => ({
        'html, body, main': {
            backgroundColor: mode('#222', '#fff')(props),
            color: props.colorMode === 'dark' ? 'white' : '#222'
        },
        body: {
            minHeight: '100vh'
        },
        '.react-target': {
            backgroundColor: mode('#222', '#fff')(props)
        },
        '.sf-app': {
            backgroundColor: mode('#222 !important', '#fff')(props)
        }
    })
}
