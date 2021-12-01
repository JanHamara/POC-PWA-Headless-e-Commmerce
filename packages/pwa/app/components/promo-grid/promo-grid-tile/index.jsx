/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {GridItem, Center, Img, Text, Link, VStack} from '@chakra-ui/react'

const PromoGridTile = (props) => {
    const {tile} = props
    const {id, thumbnailImage, label, slug, size} = tile

    return (
        <GridItem
            w="full"
            h="auto"
            rowSpan={size == 'large' ? 2 : 1}
            colSpan={1}
            position="relative"
        >
            <Img
                w="full"
                pb="40px"
                minH={
                    size == 'large' ? {base: '405px', md: '810px'} : {base: '202.5px', md: '405px'}
                }
                h={size == 'large' ? 'full' : 'full'}
                src={thumbnailImage}
                alt="offer-thumbnail-image"
            />

            <Center
                position="absolute"
                left="50%"
                bottom={0}
                transform="translate(-50%, 0)"
                h="80px"
                w={{base: '90%', md: '80%'}}
                backgroundColor="white"
                border="1px solid #dadada"
            >
                <VStack spacing={1}>
                    <Text
                        textStyle="sectionHeading"
                        textAlign="center"
                        fontSize={{base: 'xs', md: 'sm'}}
                    >
                        {label}
                    </Text>

                    <Link w="fit" href={`/${slug}`} variant="primary">
                        Discover
                    </Link>
                </VStack>
            </Center>
        </GridItem>
    )
}

PromoGridTile.displayName = 'PromoGrid'

PromoGridTile.propTypes = {
    id: PropTypes.number,
    thumbnailImage: PropTypes.string,
    label: PropTypes.string,
    slug: PropTypes.string,
    size: 'small' || 'large'
}

export default PromoGridTile
