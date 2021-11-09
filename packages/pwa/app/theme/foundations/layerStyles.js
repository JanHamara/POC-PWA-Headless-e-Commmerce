/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const pageBase = {
    paddingBottom: 16,
    width: 'full',
    maxWidth: 'container.xxxxl',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: {base: 4, md: 8, xl: 10, max: 4},
    paddingRight: {base: 4, md: 8, xl: 10, max: 4}
}

// const card = {
//     py: 6,
//     px: 4,
//     backgroundColor: 'white',
//     rounded: 'base',
//     boxShadow: 'base'
// }

// const cardBordered = {
//     ...card,
//     px: [4, 4, 5, 6],
//     border: '1px solid',
//     borderColor: 'gray.50'
// }

const graybox = {
    w: 'full',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 5,
    backgroundColor: 'bg'
}

const grayboxMedium = {
    ...graybox,
    paddingLeft: {base: 4, md: 16},
    paddingRight: {base: 4, md: 16},
    paddingTop: {base: 4, md: 6},
    paddingBottom: {base: 0, md: 5},
    backgroundColor: {base: 'none', md: 'bg'}
}

const bordered = {
    border: '1px solid #dadada'
}

export default {
    // card,

    // cardBordered,

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

    graybox,
    grayboxMedium,
    bordered,

    reset: {
        p: 0,
        m: 0,
        border: 0,
        outline: 0
    }
}
