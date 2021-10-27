/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const pageBase = {
    paddingBottom: 32,
    width: '100%',
    maxWidth: 'container.xxxxl',
    marginLeft: 'auto',
    marginRight: 'auto',
    px: [4, 4, 6, 6, 3]
}
const card = {
    py: 6,
    px: 4,
    backgroundColor: 'white',
    rounded: 'base',
    boxShadow: 'base'
}

const cardBordered = {
    ...card,
    px: [4, 4, 5, 6],
    border: '1px solid',
    borderColor: 'gray.50'
}

export default {
    card,

    cardBordered,

    ccIcon: {
        width: '34px',
        height: '22px'
    },

    page: {
        ...pageBase,
        paddingTop: 10
    },

    productPage: {
        ...pageBase
    },

    reset: {
        p: 0,
        m: 0,
        border: 0,
        outline: 0
    }
}
