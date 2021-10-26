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

const secondaryBase = {
    fontFamily: 'heading',
    color: 'black',
    lineHeight: 0
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

const productName = {
    ...secondaryBase,
    fontSize: ['sm', 'sm'],
    fontStyle: 'italic',
    lineHeight: 4
}

const productBrand = {
    ...secondaryBase,
    fontSize: ['xl', 'xl'],
    lineHeight: 9,
    m: 0
}

const productPrice = {
    ...secondaryBase,
    fontWeight: 'bold',
    fontSize: 'lg',
    lineHeight: 7
}

const productPriceCurrency = {
    ...productPrice,
    fontSize: '3xs',
    lineHeight: 4,
    mr: 1,
    mt: 2
}

export default {
    base,
    heading,
    subtitle,
    text,

    // PDP Text Styles
    productName,
    productBrand,
    productPrice,
    productPriceCurrency
}
