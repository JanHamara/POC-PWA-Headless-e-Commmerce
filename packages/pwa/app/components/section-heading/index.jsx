/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, VStack, Text, Heading} from '@chakra-ui/react'

const SectionHeading = (props) => {
    const {heading, subheading} = props
    return (
        <Box w="full" my={{base: 6, md: 16}}>
            <Flex justifyContent="center" alignItems="center" flexWrap="nowrap">
                <Box h="1px" borderTop="1px solid #dadada" flexGrow={2}></Box>

                <VStack mx={{base: 4, md: 10}} spacing={1}>
                    <Text
                        textStyle="sectionHeading"
                        fontSize={{base: '22px', md: '30px', lg: '48px'}}
                    >
                        {heading}
                    </Text>
                    <Text
                        textStyle="baseMedium"
                        textTransform="uppercase"
                        fontSize={{base: '12px', md: 'base'}}
                    >
                        {subheading}
                    </Text>
                </VStack>

                <Box h="1px" borderTop="1px solid #dadada" flexGrow={2}></Box>
            </Flex>
        </Box>
    )
}

SectionHeading.displayName = 'SectionHeading'

SectionHeading.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
}

export default SectionHeading
