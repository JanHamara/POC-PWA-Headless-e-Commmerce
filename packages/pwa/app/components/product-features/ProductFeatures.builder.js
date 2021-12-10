import {Builder} from '@builder.io/react'
import ProductFeatures from './index'

Builder.registerComponent(ProductFeatures, {
    name: 'ProductFeatures',
    inputs: [
        {
            name: 'title',
            type: 'string',
            defaultValue: 'Features'
        },
        {
            name: 'refInfo',
            type: 'list',
            defaultValue: [
                {
                    label: 'Reference',
                    value: 'A175248-CAME'
                }
            ],
            subFields: [
                {
                    name: 'label',
                    type: 'string'
                },
                {
                    name: 'value',
                    type: 'string'
                }
            ]
        },
        {
            name: 'styleInfo',
            type: 'list',
            defaultValue: [
                {
                    label: 'Color',
                    value: 'Medium Brown'
                }
            ],
            subFields: [
                {
                    name: 'label',
                    type: 'string'
                },
                {
                    name: 'value',
                    type: 'string'
                }
            ]
        }
    ]
})
