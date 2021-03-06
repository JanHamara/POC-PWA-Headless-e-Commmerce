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

const sectionHeading = {
    fontFamily: 'heading',
    color: 'black',
    fontWeight: 'hairline',
    fontStyle: 'italic'
}

const heading = {
    ...secondaryBase
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
    fontSize: '4xs',
    lineHeight: 4,
    mr: 1,
    mt: 2
}

const baseThin = {
    ...base,
    color: 'black',
    fontWeight: 'light',
    textTransform: 'uppercase'
}

const baseRegular = {
    ...base,
    color: 'gray.800',
    fontWeight: 'normal',
    textTransform: 'uppercase'
}

const baseMedium = {
    ...base,
    fontFamily: 'body',
    color: 'black',
    fontWeight: 'medium',
    letterSpacing: 'wider'
}

const baseBold = {
    ...base,
    color: 'gray.800',
    fontWeight: 'semibold',
    textTransform: 'uppercase'
}

const menu = {
    fontFamily: 'body',
    color: 'black',
    fontSize: 'xs',
    fontWeight: 'semibold',
    letterSpacing: 'wide',
    cursor: 'pointer',
    textTransform: 'uppercase'
}

const secondaryRegular = {
    fontFamily: 'heading',
    color: 'gray.800'
}

const secondaryItalic = {
    ...secondaryRegular,
    fontStyle: 'italic'
}

const secondaryBold = {
    ...secondaryRegular,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold'
}

const baseHeadingBold = {
    ...baseBold,
    color: 'black',
    letterSpacing: 'wider'
}

const baseHeadingBoldShort = {
    ...baseHeadingBold,
    letterSpacing: 'normal'
}

const grayboxHeading = {
    ...base,
    fontSize: 'sm',
    fontWeight: 'semibold',
    color: 'gray.800',
    letterSpacing: 'wider'
}

const submenu = {
    fontSize: '4xs',
    color: 'gray.400',
    fontWeight: 'regular',
    letterSpacing: 'normal'
}

export default {
    base,
    heading,
    subtitle,
    text,

    // Base Text Styles
    baseThin,
    baseRegular,
    baseMedium,
    baseBold,

    // Base Headings
    baseHeadingBold,
    baseHeadingBoldShort,

    // Heading Text Styles (Playfair)
    secondaryRegular,
    secondaryItalic,
    secondaryBold,

    sectionHeading,

    // Graybox Styles
    grayboxHeading,
    menu,
    submenu,

    // PDP Text Styles
    productName,
    productBrand,
    productPrice,
    productPriceCurrency
}
