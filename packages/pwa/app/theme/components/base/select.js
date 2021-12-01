/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const fieldBase = {
    height: 11,
    bg: 'none',
    color: 'gray.800',
    borderRadius: 0,
    border: '1px solid #bebebe',
    fontSize: '2xs',
    fontFamily: 'body',
    fontWeight: 400,
    letterSpacing: 'wide',
    textTransform: 'uppercase'
}

export default {
    variants: {
        attribute: {
            field: {
                ...fieldBase
            }
        },
        sort: {
            field: {
                width: 'fit',
                h: 10,
                background: 'none',
                color: 'black',
                fontFamily: 'body',
                fontWeight: 'semibold',
                textTransform: 'uppercase',
                fontSize: '2xs'
            }
        }
    }
}
