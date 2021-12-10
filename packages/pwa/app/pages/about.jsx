import React from 'react'
import {BuilderComponent, builder} from '@builder.io/react'

const About = ({location}) => {
    const [builderContentJson, setBuilderContentJson] = React.useState(null)

    return <BuilderComponent model="page" />
}

About.getTemplateName = () => 'About'
About.propTypes = {}

About.getProps = async ({res}) => {
    // Since the home page is static, it is safe to set max age to a high value
    // we set it to a year here, but you can set the value that is suitable for your project
    if (res) {
        res.set('Cache-Control', 'max-age=31536000')
    }
}

export default About
