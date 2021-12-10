import {Builder} from '@builder.io/react'
import ProductCreatorInfo from './index'

Builder.registerComponent(ProductCreatorInfo, {
    name: 'ProductCreatorInfo',
    inputs: [
        {
            name: 'id',
            type: 'number'
        },
        {
            name: 'title',
            type: 'string',
            defaultValue: 'About the author'
        },
        {
            name: 'name',
            type: 'string',
            defaultValue: 'Ash'
        },
        {
            name: 'content',
            type: 'string',
            defaultValue:
                'Ash successfully combines a touch of couture with rock n roll and a twist of casual-chic allure. The brand was created in 2000 by the French designer Patrick Ithier and the Italian entrepreneur Leonello Calvani.'
        },
        {
            name: 'linkLabel',
            type: 'string',
            defaultValue: 'Discover'
        }
    ]
})
