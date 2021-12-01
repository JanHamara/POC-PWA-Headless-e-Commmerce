import {Builder} from '@builder.io/react'
import Carousel from './index'

Builder.registerComponent(Carousel, {
    name: 'Carousel',
    inputs: [
        {
            name: 'slides',
            type: 'list',
            defaultValue: [
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
            ],
            subFields: [
                {
                    name: 'slide',
                    type: 'object',
                    defaultValue: {
                        img:
                            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637145903/temp/carousel1_cwve6b.jpg',
                        label: 'Canada Goose',
                        description: 'Gagnez en chaleur sans perdre en style',
                        cta: {
                            href: '/',
                            label: 'Découvrir'
                        }
                    },
                    subFields: [
                        {name: 'img', type: 'string'},
                        {name: 'label', type: 'string'},
                        {name: 'description', type: 'string'},
                        {
                            name: 'cta',
                            type: 'object',
                            defaultValue: {
                                href: '/',
                                label: 'Découvrir'
                            },
                            subFields: [
                                {name: 'href', type: 'string'},
                                {name: 'label', type: 'string'}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'carouselHeight',
            type: 'string',
            defaultValue: '660px'
        },
        {
            name: 'pagination',
            type: 'boolean',
            defaultValue: false
        }
    ]
})
