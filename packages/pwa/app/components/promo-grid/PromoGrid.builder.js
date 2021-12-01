import {Builder} from '@builder.io/react'
import PromoGrid from './index'

Builder.registerComponent(PromoGrid, {
    name: 'PromoGrid',
    inputs: [
        {
            name: 'items',
            type: 'list',
            defaultValue: [
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
            ],
            subFields: [
                {
                    name: 'tile',
                    type: 'object',
                    defaultValue: {
                        id: 0,
                        thumbnailImage:
                            'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1637664269/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/3_lous1d.jpg',
                        label: 'Lorem ipsum',
                        slug: 'boots',
                        size: 'small'
                    },
                    subFields: [
                        {name: 'id', type: 'number'},
                        {name: 'thumbnailImage', type: 'string'},
                        {name: 'label', type: 'string'},
                        {name: 'slug', type: 'string'},
                        {
                            name: 'size',
                            type: 'string',
                            defaultValue: 'large',
                            enum: ['small', 'large']
                        }
                    ]
                }
            ]
        }
    ]
})
