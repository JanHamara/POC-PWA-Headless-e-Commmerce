/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'

// Chakra Components
import {Flex, VStack, Text, Box, Center, Divider} from '@chakra-ui/react'
import {HideOnMobile, HideOnDesktop} from '../responsive'

/**
 * Component presenting product features data
 * @param {string} title Component Title
 * @param {object} refInfo Product Reference Information
 * @param {object} refInfo Product Style Information
 * @returns A JSX element representing product information.
 */
const ProductFeatures = ({title, refInfo, styleInfo}) => {
    React.useEffect(() => {
        console.log(refInfo)
        console.log(styleInfo)
    }, [refInfo, styleInfo])

    return (
        <VStack mt={6} align="center" justify="center" spacing={6}>
            <Box w="full">
                <Text
                    w="full"
                    as="h6"
                    mb={6}
                    fontSize="base"
                    textAlign="center"
                    textStyle="baseHeadingBold"
                >
                    {title}
                </Text>
                <Flex
                    layerStyle="graybox"
                    textStyle="baseRegular"
                    fontSize="3xs"
                    letterSpacing="wider"
                    w="full"
                    paddingLeft={10}
                    paddingRight={10}
                    flexDirection={{base: 'column', md: 'row'}}
                >
                    <VStack w="full" spacing={4}>
                        {refInfo.map((product, index) => (
                            <Flex key={index} w="full">
                                <Text flex="1">{product.label}:</Text>
                                <Text flex="1">{product.value}</Text>
                            </Flex>
                        ))}
                    </VStack>

                    <Center w="30%">
                        <HideOnMobile fh={true}>
                            <Divider orientation="vertical" borderColor="gray.300"></Divider>
                        </HideOnMobile>
                    </Center>

                    <HideOnDesktop>
                        <Box minH={4} h={4}></Box>
                    </HideOnDesktop>

                    <VStack w="full" spacing={4}>
                        {styleInfo.map((product, index) => (
                            <Flex key={index} w="full">
                                <Text flex="1">{product.label}:</Text>
                                <Text flex="1">{product.value}</Text>
                            </Flex>
                        ))}
                    </VStack>
                </Flex>
            </Box>
        </VStack>
    )
}

ProductFeatures.propTypes = {
    title: PropTypes.string,
    styleInfo: PropTypes.array,
    refInfo: PropTypes.array
}

export default ProductFeatures
