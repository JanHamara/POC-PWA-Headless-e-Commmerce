/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Img, Center, Text, VStack, Button, useMultiStyleConfig} from '@chakra-ui/react'

const PromoTile = (props) => {
    const {img, title, subtitle, href, ...rest} = props
    const styles = useMultiStyleConfig('PromoTile')

    return (
        <Center {...styles.container}>
            <Center {...styles.wrapper}>
                <Img {...styles.image} src={img} alt="promo-tile"></Img>

                <VStack {...styles.stack}>
                    {title && (
                        <Text {...styles.title} fontSize={{base: '26px'}}>
                            {title}
                        </Text>
                    )}

                    {subtitle && (
                        <Text {...styles.subtitle} fontSize={{base: '14px'}}>
                            {subtitle}
                        </Text>
                    )}

                    {href && <Button {...styles.button}>Découvrir</Button>}
                </VStack>
            </Center>
        </Center>
    )
}

PromoTile.displayName = 'PromoTile'

PromoTile.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    href: PropTypes.string
}

export default PromoTile
