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
                        {service.icon == 'diamond' && <Diamond boxSize={20} />}
                        {service.icon == 'delivery' && <Delivery boxSize={20} />}
                        {service.icon == 'connect' && <Connect boxSize={20} />}
                        {service.icon == 'bgyou' && <BgYou boxSize={20} />}

                        <Flex maxW="175px" flexDirection="column" ml={8}>
                            <h5>{service.heading}</h5>

                            <Text>{service.content}</Text>

                            <Link href={service.cta.href} variant="secondary">
                                {service.cta.label}
                            </Link>
                        </Flex>
                    </Flex>
                </HStack>
            ))}
        </Flex>
    )
}

export default FeatureStack
