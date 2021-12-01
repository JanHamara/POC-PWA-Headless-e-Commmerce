import {Builder} from '@builder.io/react'
import PromoGridTile from './index'

Builder.registerComponent(PromoGridTile, {
    name: 'PromoGridTile',
    inputs: [
        {
            name: 'tile',
            type: 'object',
            subFields: [
                {name: 'id', type: 'number'},
                {name: 'thumbnailImage', type: 'string'},
                {name: 'label', type: 'string'},
                {name: 'slug', type: 'string'},
                {name: 'size', type: 'string', defaultValue: 'large', enum: ['small', 'large']}
            ]
        }
    ]
})
