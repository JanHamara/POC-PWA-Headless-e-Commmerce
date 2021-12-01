/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, Grid, VStack, Text, Heading, Flex} from '@chakra-ui/react'
import PromoGridTile from './promo-grid-tile'

const PromoGrid = (props) => {
    const {items} = props

    return (
        <Box w="full">
            <Grid templateColumns={{base: '1fr', md: '1fr 1fr'}} gap={12}>
                {items.map((item) => (
                    <PromoGridTile tile={item}></PromoGridTile>
                ))}
            </Grid>
        </Box>
    )
}

PromoGrid.displayName = 'PromoGrid'

PromoGrid.propTypes = {
    items: PropTypes.array
}

export default PromoGrid
