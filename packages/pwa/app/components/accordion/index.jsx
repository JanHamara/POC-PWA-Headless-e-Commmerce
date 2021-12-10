/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'

// Chakra Components
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    Text
} from '@chakra-ui/react'
import {MinusIcon, PlusIcon} from '../../components/icons'

/**
 * Accordion Component
 * @param {array} items Accordion Items
 * @param {boolean} allowMultiple Allow expansion of multiple items at once
 * @returns A JSX element representing product info accordion
 * **/
const DescriptionAccordion = ({allowMultiple = false, items}) => {
    return (
        <Accordion w="full" allowMultiple={allowMultiple}>
            {items ? (
                items.map((item, idx) => (
                    <AccordionItem key={idx}>
                        {({isExpanded}) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                            {item.title}
                                        </Box>
                                        {isExpanded ? (
                                            <MinusIcon fontSize="12px" />
                                        ) : (
                                            <PlusIcon fontSize="12px" />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <Text dangerouslySetInnerHTML={{__html: item.content}}></Text>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))
            ) : (
                <Text>There are no items.</Text>
            )}
        </Accordion>
    )
}

DescriptionAccordion.propTypes = {
    items: PropTypes.array,
    allowMultiple: PropTypes.bool
}

export default DescriptionAccordion
