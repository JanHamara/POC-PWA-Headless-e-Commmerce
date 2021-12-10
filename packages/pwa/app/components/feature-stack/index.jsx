import React from 'react'
import {
    AspectRatio,
    Box,
    Flex,
    Image,
    HStack,
    VStack,
    Link,
    Text,
    Img,
    // Hooks
    useMultiStyleConfig
} from '@chakra-ui/react'
import {Diamond, Connect, Delivery, BgYou} from '../icons'

const FeatureStack = (props) => {
    const {services, ...otherProps} = props

    const style = useMultiStyleConfig('Features')

    return (
        <Flex {...style.container}>
            {services.map((service, idx) => (
                <HStack {...style.item} _last={{mb: 0}} key={idx} spacing={4}>
                    <Flex alignItems="center">
                        <Img boxSize={20} src={service.icon} alt="service-icon" />

                        <Flex maxW="175px" flexDirection="column" ml={8}>
                            <h6>{service.heading}</h6>

                            <Text>{service.content}</Text>

                            <Link href={service.ctaHref} variant="secondary">
                                {service.ctaLabel}
                            </Link>
                        </Flex>
                    </Flex>
                </HStack>
            ))}
        </Flex>
    )
}

export default FeatureStack
