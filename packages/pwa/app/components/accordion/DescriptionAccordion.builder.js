import {Builder} from '@builder.io/react'
import DescriptionAccordion from './index'

Builder.registerComponent(DescriptionAccordion, {
    name: 'DescriptionAccordion',
    inputs: [
        {
            name: 'allowMultiple',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'items',
            type: 'list',
            defaultValue: [
                {
                    title: 'Product Details',
                    content:
                        'Embroidered with ethnical Inca art inspired patterns, these <strong>ASH</strong> boots will elevate any outfit! They are made of distressed looking suede, and are lined with smooth leather. A zipper is concealed on the insides of the ankles. Pointy tips, leather soles and Cuban heels complete the look. <br /><br /><li>Heel: 4cm</li><li>Shaft height: 32cm</li>'
                }
            ],
            subFields: [
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'content',
                    type: 'string'
                }
            ]
        }
    ]
})
