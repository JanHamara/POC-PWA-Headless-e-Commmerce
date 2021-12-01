/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: () => ({
        container: {
            marginTop: '40px',
            borderBottom: '1px solid #bebebe'
        },
        favIcon: {
            position: 'absolute',
            variant: 'unstyled',
            top: 2,
            right: 2
        },
        imageWrapper: {
            position: 'relative',
            w: 'full',
            py: {base: 0, lg: 4},
            mx: 4,
            borderBottom: {base: 0, lg: '1px solid #bebebe'}
        },
        image: {
            ratio: 1,
            paddingBottom: 4,
            mt: 4
        },
        productInfoWrapper: {
            w: 'full',
            mx: 4,
            p: 4
        },
        productInfoHeading: {
            flexDirection: {base: 'column', md: 'row'},
            justifyContent: 'space-between',
            alignItems: {base: 'center', md: 'flex-start'},
            flexWrap: 'nowrap',
            color: 'black'
        },
        price: {
            mt: {base: 4, md: 0},
            textStyle: 'secondaryRegular',
            fontSize: 'base',
            fontWeight: 'medium'
        },
        currency: {
            textStyle: 'secondaryRegular',
            fontSize: '5xs',
            fontWeight: 'medium',
            marginRight: 1,
            marginBottom: '2px'
        },
        description: {
            textStyle: 'secondaryRegular',
            fontSize: '4xs',
            color: 'gray.800'
        },
        brand: {
            textAlign: {base: 'center', md: 'left'},
            textStyle: 'secondaryRegular',
            fontSize: '2xs',
            textTransform: 'uppercase',
            color: 'black'
        },
        rating: {},
        variations: {}
    }),
    parts: [
        'container',
        'imageWrapper',
        'productInfoWrapper',
        'productInfoHeading',
        'image',
        'currency',
        'description',
        'price',
        'brand',
        'rating',
        'variations'
    ]
}
