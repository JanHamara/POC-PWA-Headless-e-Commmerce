import {Builder} from '@builder.io/react'
import ProductGrid from './index'

Builder.registerComponent(ProductGrid, {
    name: 'ProductGrid',
    inputs: [
        {
            name: 'promos',
            type: 'list',
            defaultValue: [
                {
                    position: 7,
                    img:
                        'https://res.cloudinary.com/jhamara/image/upload/v1638268416/PoC/Frame_1_1_nqbfyv.jpg',
                    title: null,
                    subtitle: null,
                    href: null
                },
                {
                    position: 12,
                    img:
                        'https://res.cloudinary.com/jhamara/image/upload/v1638268413/PoC/Frame_2_1_ur0kjc.jpg',
                    title: 'New bags collection',
                    subtitle: 'Explore our winter range of luxury bags',
                    href: '/bags'
                }
            ],
            subFields: [
                {
                    name: 'position',
                    type: 'number',
                    defaultValue: 7
                },
                {
                    name: 'img',
                    type: 'string',
                    defaultValue:
                        'https://res.cloudinary.com/jhamara/image/upload/v1638268413/PoC/Frame_2_1_ur0kjc.jpg'
                },
                {
                    name: 'title',
                    type: 'string',
                    defaultValue: null
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    defaultValue: null
                },
                {
                    name: 'href',
                    type: 'string',
                    defaultValue: '/'
                }
            ]
        }
    ]
})
