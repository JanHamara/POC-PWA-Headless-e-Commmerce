/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {isServer} from '../../../utils/utils'
// Components
import {Box, HStack, VStack, Center, Link, Flex, Text, Spacer} from '@chakra-ui/react'

// Project Components
import Breadcrumb from '../../../components/breadcrumb'
import {HideOnMobile} from '../../../components/responsive'

const mockSubcategories = ['Ready to wear', 'Shoes', 'Accessories', 'Bags', 'Luxury Jewellery']

const PageHeader = ({category, productSearchResult, isLoading, searchQuery, ...otherProps}) => {
    return (
        <Box {...otherProps} w="full" data-testid="sf-product-list-breadcrumb">
            {/* Category Title */}
            <VStack spacing={0} w="full" justifyContent="flex-start" alignItems="center">
                <Box layerStyle="maxContainerNoPad">
                    <Center
                        w="full"
                        maxW={{base: '85vw', md: 'full'}}
                        mx="auto"
                        py={{base: 6, md: 10}}
                    >
                        <h3>{`${category?.name || searchQuery || ''}`}</h3>
                    </Center>
                </Box>

                {mockSubcategories && (
                    <Box
                        h={{base: 'auto', md: '53px'}}
                        maxH={{base: 'auto', md: '53px'}}
                        w="full"
                        backgroundColor="black"
                        color="white"
                        py={{base: 4, md: 0}}
                    >
                        <Flex
                            w={{base: '70vw', md: 'full'}}
                            h="full"
                            lineHeight={{base: 2, md: 'unset'}}
                            maxW="container.xxxxl"
                            justifyContent="center"
                            alignItems="center"
                            mx="auto"
                        >
                            <HStack
                                spacing={4}
                                justifyContent="center"
                                flexWrap={{base: 'wrap', md: 'nowrap'}}
                            >
                                {mockSubcategories.map((category, index) => (
                                    <Flex key={index}>
                                        <Link href="javascript:void(0)" variant="category">
                                            {category}
                                        </Link>
                                        {index !== mockSubcategories.length - 1 && (
                                            <Text fontWeight="semibold" ml={4}>
                                                /
                                            </Text>
                                        )}
                                    </Flex>
                                ))}
                            </HStack>
                        </Flex>
                    </Box>
                )}
                {/* <Heading as="h2" size="lg" marginRight={2}>
                    {isServer ? (
                        <Fragment>({productSearchResult?.total})</Fragment>
                    ) : (
                        // Fade in the total when available. When it's changed or not available yet, do not render it
                        !isLoading && <Fade in={true}>({productSearchResult?.total})</Fade>
                    )}
                </Heading> */}
                <Box layerStyle="maxContainer" display={{base: 'none', lg: 'block'}}>
                    {/* Breadcrumb */}
                    {mockSubcategories && <Spacer maxH={2} minH={2}></Spacer>}

                    {category && <Breadcrumb categories={category.parentCategoryTree} />}
                </Box>
            </VStack>
        </Box>
    )
}

PageHeader.propTypes = {
    category: PropTypes.object,
    productSearchResult: PropTypes.object,
    isLoading: PropTypes.bool,
    searchQuery: PropTypes.string
}

export default PageHeader
