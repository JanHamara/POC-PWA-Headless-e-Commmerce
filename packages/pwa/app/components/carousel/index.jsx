import React, {useState} from 'react'
import {
    Text,
    Box,
    Flex,
    Image,
    HStack,
    Link,
    Stack,
    // Hooks
    useStyleConfig
} from '@chakra-ui/react'

const Carousel = (props) => {
    const {slides, carouselHeight, pagination = false} = props

    const styles = useStyleConfig('Carousel')

    const [currentSlide, setCurrentSlide] = useState(0)

    const slidesCount = slides.length

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
    }
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
    }
    const setSlide = (slide) => {
        setCurrentSlide(slide)
    }

    const carouselStyle = {
        transition: 'all .5s',
        ml: `-${currentSlide * 100}%`
    }

    return (
        <Flex {...styles.container}>
            <Flex h={{base: '300px', lg: carouselHeight}} w="full" {...carouselStyle}>
                {slides.map((slide, sid) => (
                    <Box
                        key={`slide-${sid}`}
                        boxSize="full"
                        shadow="md"
                        flex="none"
                        position="relative"
                    >
                        <Image src={slide.img} boxSize="full" filter="brightness(.8)" />
                        {/* <Box
                            boxSize="full"
                            backgroundImage={`url(${slide.img})`}
                            backgroundPosition="center"
                            backgroundSize="cover"
                            backgroundRepeat="no-repeat"
                        ></Box> */}
                        <Stack
                            pos="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            textAlign="center"
                            alignItems="center"
                            w="full"
                            color="white"
                            spacing={{base: 2, md: 8}}
                        >
                            <Text {...styles.label}>{slide.label}</Text>
                            <Text {...styles.description}>{slide.description}</Text>

                            {slide.cta && (
                                <Link href={slide.cta.href} variant="solid">
                                    {slide.cta.label}
                                </Link>
                            )}
                        </Stack>
                    </Box>
                ))}
            </Flex>
            <Text {...styles.arrow} left="0" onClick={prevSlide}>
                &#10094;
            </Text>
            <Text {...styles.arrow} right="0" onClick={nextSlide}>
                &#10095;
            </Text>

            {pagination && currentSlide && (
                <HStack justify="center" pos="absolute" bottom="8px" w="full">
                    {Array.from({length: slidesCount}).map((_, slide) => (
                        <Box
                            key={`dots-${slide}`}
                            cursor="pointer"
                            boxSize={['7px', , '15px']}
                            m="0 2px"
                            bg={currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'}
                            rounded="50%"
                            display="inline-block"
                            transition="background-color 0.6s ease"
                            _hover={{bg: 'blackAlpha.800'}}
                            onClick={() => setSlide(slide)}
                        ></Box>
                    ))}
                </HStack>
            )}
        </Flex>
    )
}

export default Carousel
