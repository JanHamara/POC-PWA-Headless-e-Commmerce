import {Builder} from '@builder.io/react'
import SectionHeading from './index'

Builder.registerComponent(SectionHeading, {
    name: 'SectionHeading',
    inputs: [{name: 'heading', type: 'text'}, {name: 'subheading', type: 'text'}]
})
