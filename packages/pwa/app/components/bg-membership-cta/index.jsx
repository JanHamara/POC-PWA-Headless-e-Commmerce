/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'

// Chakra Components
import {Flex, Divider, Text} from '@chakra-ui/react'
import {BgClub} from '../../components/icons'

/**
 * Bg Club Membership Sign-up CTA Component
 * @param {array} content Content
 * @returns A JSX element box with BG Club description and CTA
 * **/
const BgMembershipCta = ({content}) => {
    return (
        <Flex
            w="full"
            direction={{base: 'column', md: 'row'}}
            justify="center"
            align="center"
            layerStyle="graybox"
            paddingTop={{base: 12, md: 6}}
            paddingBottom={{base: 12, md: 5}}
        >
            <BgClub
                w={{base: '104px', md: '52px'}}
                h={{base: '36px', md: '18px'}}
                fill="gray.900"
            />

            <Divider
                mx={8}
                orientation="vertical"
                borderColor="gray.400"
                borderLeftWidth="1px"
            ></Divider>

            <Text
                mt={{base: 8, md: 0}}
                textAlign="center"
                textStyle="secondaryRegular"
                fontSize="2xs"
                dangerouslySetInnerHTML={{__html: content}}
            ></Text>
        </Flex>
    )
}

BgMembershipCta.propTypes = {
    content: PropTypes.string
}

export default BgMembershipCta
