/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'

// Chakra Components
import {Flex, VStack, Text, Link} from '@chakra-ui/react'

/**
 * Component representing product creator information with required heading for author name and required paragraph for author info
 * @param {number} id Creator Id
 * @param {node} name Creator Name
 * @param {node} content Creator Description Paragraph
 * @param {string} linkLabel Link label for CTA to guide to creator profile
 * @returns A JSX element representing product creator information (inside graybox layer style).
 */
const ProductCreatorInfo = ({id, name, content, linkLabel}) => {
    const {formatMessage} = useIntl()

    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            layerStyle="grayboxMedium"
        >
            <VStack w="full" spacing={3}>
                <Text textStyle="baseRegular" fontSize="4xs" letterSpacing="wider">
                    {formatMessage({
                        defaultMessage: 'About the creator'
                    })}
                </Text>

                <Text textStyle="grayboxHeading">{name}</Text>

                <Text
                    textStyle="secondaryRegular"
                    textAlign="center"
                    fontSize="2xs"
                    lineHeight="taller"
                >
                    {content}
                </Text>
            </VStack>

            {linkLabel && id && (
                <Link
                    mt={10}
                    mb={{base: 0, md: 4}}
                    w="fit"
                    href={`/creator/${id}`}
                    variant="primary"
                >
                    {linkLabel}
                </Link>
            )}
        </Flex>
    )
}

ProductCreatorInfo.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    linkLabel: PropTypes.string
}

export default ProductCreatorInfo
