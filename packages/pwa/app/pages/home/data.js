/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is the data used in by the Retail React App home page.
 * The example static data is created for demonstration purposes.
 * Typically you'd get this information from the API or possibly
 * from content slots.
 */

import {defineMessages} from 'react-intl'

export const categoriesThreeColumns = [
    {
        message: defineMessages({
            title: {defaultMessage: "Shop Women's Outfits"},
            href: {defaultMessage: '/{activeLocale}/category/womens-outfits'},
            imgSrc: {defaultMessage: 'static/img/women-outfit.png'},
            imgAlt: {defaultMessage: "Shop Women's Outfits"}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: "Shop Men's Suits"},
            href: {defaultMessage: '/{activeLocale}/category/mens-clothing-suits'},
            imgSrc: {defaultMessage: 'static/img/men-suits.png'},
            imgAlt: {defaultMessage: "Shop Men's Suits"}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: "Shop Women's Dresses"},
            href: {defaultMessage: '/{activeLocale}/category/womens-clothing-dresses'},
            imgSrc: {defaultMessage: 'static/img/women-dresses.png'},
            imgAlt: {defaultMessage: "Shop Women's Dresses"}
        })
    }
]
export const categoriesTwoColumns = [
    {
        message: defineMessages({
            title: {defaultMessage: "Shop Women's Jackets & Coats"},
            href: {defaultMessage: '/{activeLocale}/category/womens-clothing-jackets'},
            imgSrc: {defaultMessage: 'static/img/women-coats.png'},
            imgAlt: {defaultMessage: "Shop Women's Jackets & Coats"}
        })
    },
    {
        message: defineMessages({
            title: {defaultMessage: 'Shop Feeling Red'},
            href: {defaultMessage: '/{activeLocale}/category/womens-clothing-feeling-red'},
            imgSrc: {defaultMessage: 'static/img/feeling-red.png'},
            imgAlt: {defaultMessage: 'Shop Feeling Red'}
        })
    }
]
export const slides = [
    {
        img:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637145903/temp/carousel1_cwve6b.jpg',
        label: 'Canada Goose',
        description: 'Gagnez en chaleur sans perdre en style',
        cta: {
            label: 'Découvrir',
            href:
                'https://www.bongenie-grieder.ch/fr/canada-goose-2#facet:&productBeginIndex:0&facetLimit:0&orderBy:&pageView:grid&minPrice:220&maxPrice:1625&pageSize:0&'
        }
    },
    {
        img:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637145904/temp/carousel3_x12mno.jpg',
        label: 'Tenues scintillantes',
        description: 'Pour des fêtes éblouissantes',
        cta: {
            label: 'Découvrir',
            href:
                'https://www.bongenie-grieder.ch/fr/canada-goose-2#facet:&productBeginIndex:0&facetLimit:0&orderBy:&pageView:grid&minPrice:220&maxPrice:1625&pageSize:0&'
        }
    },
    {
        img:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637145903/temp/carousel2_d6tzpu.jpg',
        label: 'Gianvito Rossi',
        description: 'Trouvez chaussure à votre pied',
        cta: {
            label: 'Découvrir',
            href:
                'https://www.bongenie-grieder.ch/fr/canada-goose-2#facet:&productBeginIndex:0&facetLimit:0&orderBy:&pageView:grid&minPrice:220&maxPrice:1625&pageSize:0&'
        }
    }
]

export const featureData = [
    {
        icon: 'delivery',
        heading: 'Livraison offerte',
        content: "Sans minimum d'achat en Suisse et au Liechtenstein",
        cta: {
            label: "Plus d'infos",
            href: 'https://www.bongenie-grieder.ch/fr/'
        }
    },
    {
        icon: 'diamond',
        heading: 'Marques exclusives',
        content: 'Totem Studio, Fedeli, Agolde, Paolo Pecora, Dondup…',
        cta: {
            label: 'Toutes no marques',
            href: 'https://www.bongenie-grieder.ch/fr/'
        }
    },

    {
        icon: 'connect',
        heading: 'Click & Reserve',
        content: 'Shoppez en ligne, essayez et retirez en magasin !',
        cta: {
            label: "Plus d'infos",
            href: 'https://www.bongenie-grieder.ch/fr/'
        }
    },
    {
        icon: 'bgyou',
        heading: 'BG & vous',
        content: 'Une expérience shopping unique',
        cta: {
            label: 'Nos services exclusifs',
            href: 'https://www.bongenie-grieder.ch/fr/'
        }
    }
]

export const gridData = [
    {
        id: 0,
        thumbnailImage:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637664269/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/1_xnfocg.jpg',
        label: 'Cambio - The trousers in all their forms',
        slug: '/cambio',
        size: 'large'
    },
    {
        id: 1,
        thumbnailImage:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637664270/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/2_vzji2z.jpg',
        label: 'Booties to boost your looks',
        slug: '/boots',
        size: 'small'
    },
    {
        id: 2,
        thumbnailImage:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637664269/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/3_lous1d.jpg',
        label: 'All sweetness and light',
        slug: '/light',
        size: 'small'
    },
    {
        id: 3,
        thumbnailImage:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637664269/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/4_a21cne.jpg',
        label: 'Winter warmers for kids',
        slug: '/winter',
        size: 'large'
    },
    {
        id: 4,
        thumbnailImage:
            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637664269/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/5_xqj51w.jpg',
        label: 'Cold weather layers - Parkas, down jackets...',
        slug: '/jackets',
        size: 'large'
    }
]
