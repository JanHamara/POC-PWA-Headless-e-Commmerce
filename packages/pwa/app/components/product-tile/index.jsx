/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {HeartIcon, HeartSolidIcon} from '../icons'

// Components
import {
    AspectRatio,
    Box,
    Button,
    Img,
    Flex,
    Skeleton as ChakraSkeleton,
    Text,
    Stack,
    useMultiStyleConfig,
    IconButton,
    VStack
} from '@chakra-ui/react'

import {ChevronRightIcon} from '../../components/icons'

// Hooks
import {useIntl} from 'react-intl'

// Other
import {productUrlBuilder} from '../../utils/url'
import Link from '../link'
import withRegistration from '../../hoc/with-registration'
import {AboveLG} from '../responsive'

const IconButtonWithRegistration = withRegistration(IconButton)

// Component Skeleton
export const Skeleton = () => {
    const styles = useMultiStyleConfig('ProductTile')
    return (
        <Box data-testid="sf-product-tile-skeleton">
            <Stack spacing={2}>
                <Box {...styles.imageWrapper}>
                    <AspectRatio ratio={1} {...styles.image}>
                        <ChakraSkeleton />
                    </AspectRatio>
                </Box>
                <ChakraSkeleton width="80px" height="20px" />
                <ChakraSkeleton width={{base: '120px', md: '220px'}} height="12px" />
            </Stack>
        </Box>
    )
}

/**
 * The ProductTile is a simple visual representation of a
 * product object. It will show it's default image, name and price.
 * It also supports favourite products, controlled by a heart icon.
 */
const ProductTile = (props) => {
    const intl = useIntl()
    const {product, idx, enableFavourite = false, isFavourite, onFavouriteToggle, ...rest} = props
    const {currency, image, price, productName, productId} = product
    const [isFavouriteLoading, setFavouriteLoading] = useState(false)
    const styles = useMultiStyleConfig('ProductTile')

    return (
        <Link
            data-testid="product-tile"
            {...styles.container}
            to={productUrlBuilder({id: productId}, intl.local)}
            variant="ghost"
            role="group"
            {...rest}
        >
            <Flex
                direction="column"
                justifyContent="space-between"
                height={{base: 'auto', xxl: '480px'}}
                px={4}
                sx={
                    idx % 4
                        ? {
                              borderLeft: {
                                  base: 0,
                                  md: idx % 2 ? '1px solid #bebebe' : 0,
                                  lg: '1px solid #bebebe'
                              }
                          }
                        : {}
                }
            >
                <VStack spacing={0}>
                    <Box {...styles.imageWrapper}>
                        <AspectRatio {...styles.image}>
                            <Img alt={image.alt} src={image.disBaseLink} />
                        </AspectRatio>

                        {enableFavourite && (
                            <Box
                                onClick={(e) => {
                                    // stop click event from bubbling
                                    // to avoid user from clicking the underlying
                                    // product while the favourite icon is disabled
                                    e.preventDefault()
                                }}
                            >
                                <IconButtonWithRegistration
                                    aria-label={intl.formatMessage({
                                        defaultMessage: 'wishlist'
                                    })}
                                    icon={isFavourite ? <HeartSolidIcon /> : <HeartIcon />}
                                    {...styles.favIcon}
                                    disabled={isFavouriteLoading}
                                    onClick={async () => {
                                        setFavouriteLoading(true)
                                        await onFavouriteToggle(!isFavourite)
                                        setFavouriteLoading(false)
                                    }}
                                />
                            </Box>
                        )}
                    </Box>

                    <Box {...styles.productInfoWrapper}>
                        <Flex {...styles.productInfoHeading}>
                            {/* Title */}
                            <VStack
                                maxWidth={{base: '90%', md: '138px'}}
                                alignItems={{base: 'center', md: 'flex-start'}}
                                spacing={1}
                            >
                                <Text {...styles.brand}>{productName}</Text>
                                <Text {...styles.description}>Product description here</Text>
                            </VStack>

                            {/* Price */}
                            <Flex alignItems="flex-end" h="fit">
                                <Text {...styles.currency}>{currency}</Text>
                                <Text {...styles.price}>{intl.formatNumber(price)}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </VStack>

                <AboveLG>
                    <Button
                        opacity={0}
                        transition="opacity 1s"
                        _groupHover={{opacity: 1}}
                        key="cart-button"
                        width="full"
                        variant="solid"
                    >
                        {intl.formatMessage({defaultMessage: 'Discover'})}
                        <ChevronRightIcon boxSize={4} mb="1px" mx="2px" color="white" />
                    </Button>
                </AboveLG>
            </Flex>

            <Box h="40px"></Box>
        </Link>
    )
}

ProductTile.displayName = 'ProductTile'

ProductTile.propTypes = {
    /**
     * The product search hit that will be represented in this
     * component.
     */
    product: PropTypes.shape({
        currency: PropTypes.string,
        image: PropTypes.shape({
            alt: PropTypes.string,
            disBaseLink: PropTypes.string
        }),
        price: PropTypes.number,
        productName: PropTypes.string,
        productId: PropTypes.string,
        idx: PropTypes.number
    }),
    /**
     * Enable adding/removing product as a favourite.
     * Use case: wishlist.
     */
    enableFavourite: PropTypes.bool,
    /**
     * Display the product as a faviourite.
     */
    isFavourite: PropTypes.bool,
    /**
     * Callback function to be invoked when the user
     * interacts with favourite icon/button.
     */
    onFavouriteToggle: PropTypes.func
}

export default ProductTile
