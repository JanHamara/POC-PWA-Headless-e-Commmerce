/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Flex,
    VStack,
    Heading,
    Button,
    Link,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
} from '@chakra-ui/react'
import Seo from '../../components/seo'

/**
 * This is the design guide page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders design element of the Chakra UI,
 * in order to help with theming them
 */
const Design = () => {
    return (
        <Box data-testid="design-page" layerStyle="page">
            <Seo
                title="Design Page"
                description="Commerce Cloud Retail React App"
                keywords="Commerce Cloud, Retail React App, React Storefront"
            />

            <Heading mt="8" mb="8" color="teal.800">
                Design Guide
            </Heading>

            <VStack alignItems="flex-start" justifyContent="flex-start">
                <Heading size="lg" mb="2" mt="10" color="teal.600">
                    Headings
                </Heading>
                <Flex justifyContent="space-between" w="full">
                    <Box w="full" mt="md" mb="md">
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                    </Box>

                    <Box w="full" mt="xxl" mb="md">
                        <h1>Les doudounes Khrisjoy</h1>
                        <h2>New Arrivals</h2>
                        <h3>Chloé x Fusalp</h3>
                        <h4>Shop by Category</h4>
                        <h5>Marques exclusives</h5>
                        <h6>Anticipez la saison d&apos;hiver!</h6>
                    </Box>
                </Flex>
            </VStack>

            <VStack alignItems="flex-start" mt="4" justifyContent="flex-start">
                <Heading size="lg" mb="6" mt="10" color="teal.600">
                    Other text
                </Heading>
                <Flex justifyContent="space-between" w="full">
                    <Box w="full" mt="md" mb="md">
                        <p>Paragraph (14px)</p>
                        <Box mt="4" textStyle="base">
                            Base Text (16px)
                        </Box>
                        <Box mt="4" textStyle="subtitle">
                            Subtitle (16px)
                        </Box>
                    </Box>

                    <Box w="full" mt="xxl" mb="md">
                        <p>Lorem ipsum donor</p>
                        <Box mt="4" textStyle="base">
                            Some base text styling...
                        </Box>
                        <Box mt="4" textStyle="subtitle">
                            De la saison
                        </Box>
                    </Box>
                </Flex>
            </VStack>

            <VStack alignItems="flex-start" mt="4" justifyContent="flex-start">
                <Heading size="lg" mb="6" mt="10" color="teal.600">
                    Links
                </Heading>
                <Flex justifyContent="space-between" w="full">
                    <Box w="full" mt="md" mb="md">
                        <Box mb="6">
                            <Link href={'/'} variant="menu">
                                Menu Link
                            </Link>
                        </Box>
                        <Box mb="6">
                            <Link href={'/'} variant="submenu">
                                Menu Sub-Link
                            </Link>
                        </Box>
                        <Box mb="6">
                            <Link href={'/'} variant="primary">
                                Basic Link
                            </Link>
                        </Box>
                        <Box mb="6">
                            <Link href={'/'} variant="secondary">
                                Secondary Link
                            </Link>
                        </Box>
                    </Box>

                    <Box w="full" mt="xxl" mb="md">
                        <Box mb="6">
                            <Link href={'/'} variant="menu">
                                Nouveautés
                            </Link>
                        </Box>
                        <Box mb="6">
                            <Link href={'/'} variant="submenu">
                                Me connecter
                            </Link>
                        </Box>
                        <Box mb="6">
                            <Link href={'/'} variant="primary">
                                Découvrir
                            </Link>
                        </Box>
                        <Box mb="6">
                            <Link href={'/'} variant="secondary">
                                Plus d’infos
                            </Link>
                        </Box>
                    </Box>
                </Flex>
            </VStack>

            <VStack alignItems="flex-start" mt="4" justifyContent="flex-start">
                <Heading size="lg" mb="6" mt="10" color="teal.600">
                    Buttons
                </Heading>
                <Flex justifyContent="space-between" w="full">
                    <Box w="full" mt="md" mb="md">
                        <Button>Découvrir</Button>
                    </Box>

                    <Box w="full" mt="xxl" mb="md">
                        <Button>Découvrir</Button>
                    </Box>
                </Flex>
            </VStack>

            <VStack alignItems="flex-start" mt="4" justifyContent="flex-start">
                <Heading size="lg" mb="6" mt="10" color="teal.600">
                    Base Components
                </Heading>
                <Flex justifyContent="space-between" w="full">
                    <Box w="full" mt="md" mb="md">
                        <Box as="h4" mt="4" mb="6">
                            Button
                        </Box>

                        <Button>Découvrir</Button>

                        <Box as="h4" mt="16" mb="6">
                            Accordion
                        </Box>

                        <Box w="50%">
                            <Accordion>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Section 1 title
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Section 2 title
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>
                    </Box>
                </Flex>
            </VStack>
        </Box>
    )
}

Design.getTemplateName = () => 'design'

Design.propTypes = {
    recommendations: PropTypes.array,
    isLoading: PropTypes.bool
}

export default Design
