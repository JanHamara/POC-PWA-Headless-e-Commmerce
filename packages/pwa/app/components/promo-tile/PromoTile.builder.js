import {Builder} from '@builder.io/react'
import PromoTile from './index'

Builder.registerComponent(PromoTile, {
    name: 'PromoTile',
    inputs: [
        {
            name: 'img',
            type: 'string',
            defaultValue:
                'https://res.cloudinary.com/jhamara/image/upload/v1638265844/PoC/Frame_1_t6wp8g.jpg'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'subtitle',
            type: 'string'
        },
        {
            name: 'href',
            type: 'string'
        }
    ]
})
