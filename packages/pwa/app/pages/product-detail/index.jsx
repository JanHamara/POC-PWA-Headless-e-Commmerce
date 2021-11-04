/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {FormattedMessage, useIntl} from 'react-intl'

// Components
import {
    Box,
    Button,
    Link,
    Stack,
    HStack,
    Spacer,
    VStack,
    Flex,
    Center,
    Text,
    Divider
} from '@chakra-ui/react'

// Hooks
import useBasket from '../../commerce-api/hooks/useBasket'
import {useVariant} from '../../hooks'
import useWishlist from '../../hooks/use-wishlist'
import useNavigation from '../../hooks/use-navigation'
import useEinstein from '../../commerce-api/hooks/useEinstein'

// Project Components
// import RecommendedProducts from '../../components/recommended-products'
import ProductView from '../../partials/product-view'
import ProductCreatorInfo from '../../components/product-creator-info'

// Others/Utils
import {HTTPNotFound} from 'pwa-kit-react-sdk/ssr/universal/errors'

// constant
import {API_ERROR_MESSAGE} from '../../constants'
import {rebuildPathWithParams} from '../../utils/url'
import {useHistory} from 'react-router-dom'
import {useToast} from '../../hooks/use-toast'
import Breadcrumb from '../../components/breadcrumb'
import {ChevronRightIcon} from '../../components/icons'

// TODO: Integrate Typescript
//
// interface CreatorInfoProps {
//     name: string;
//     content: string;
//     link: {
//         label: string;
//         href: string;
//     }
// }

const ProductDetail = ({category, product, isLoading}) => {
    const {formatMessage} = useIntl()
    const basket = useBasket()
    const history = useHistory()
    const einstein = useEinstein()
    const variant = useVariant(product)
    const toast = useToast()
    const navigate = useNavigation()
    const [primaryCategory, setPrimaryCategory] = useState(category)

    // This page uses the `primaryCategoryId` to retrieve the category data. This attribute
    // is only available on `master` products. Since a variation will be loaded once all the
    // attributes are selected (to get the correct inventory values), the category information
    // is overridden. This will allow us to keep the initial category around until a different
    // master product is loaded.
    useEffect(() => {
        if (category) {
            setPrimaryCategory(category)
        }
    }, [category])

    /**************** Product Variant ****************/
    useEffect(() => {
        // update the variation attributes parameter on
        // the url accordingly as the variant changes
        const updatedUrl = rebuildPathWithParams(`${location.pathname}${location.search}`, {
            pid: variant?.productId
        })
        history.replace(updatedUrl)
    }, [variant])

    /**************** Wishlist ****************/
    const wishlist = useWishlist()
    const handleAddToWishlist = async (quantity) => {
        try {
            await wishlist.createListItem({
                id: product.id,
                quantity
            })
            toast({
                title: formatMessage(
                    {
                        defaultMessage:
                            '{quantity} {quantity, plural, one {item} other {items}} added to wishlist'
                    },
                    {quantity: 1}
                ),
                status: 'success',
                action: (
                    <Button variant="link" onClick={() => navigate('/account/wishlist')}>
                        View
                    </Button>
                )
            })
        } catch {
            toast({
                title: formatMessage(
                    {defaultMessage: '{errorMessage}'},
                    {errorMessage: API_ERROR_MESSAGE}
                ),
                status: 'error'
            })
        }
    }

    /**************** Add To Cart ****************/
    const showToast = useToast()
    const showError = () => {
        showToast({
            title: formatMessage(
                {defaultMessage: '{errorMessage}'},
                {errorMessage: API_ERROR_MESSAGE}
            ),
            status: 'error'
        })
    }
    const handleAddToCart = async (variant, quantity) => {
        try {
            if (!variant?.orderable || !quantity) return
            // The basket accepts an array of `ProductItems`, so lets create a single
            // item array to add to the basket.
            const productItems = [
                {
                    productId: variant.productId,
                    quantity,
                    price: variant.price
                }
            ]

            await basket.addItemToBasket(productItems)
        } catch (error) {
            showError(error)
        }
    }

    /**************** Einstein ****************/
    useEffect(() => {
        if (product) {
            einstein.sendViewProduct(product)
        }
    }, [product])

    /**************** Some Mock Data ****************/

    // getProductInfo(productID, variant).then((response) => ...)
    const productInfo = {
        referenceInfo: [
            {
                label: 'Reference',
                value: 'A175248-CAME'
            },
            {
                label: 'Assemblage',
                value: 'Hors Europe'
            }
        ],
        styleInfo: [
            {
                label: 'Color',
                value: 'Medium Brown'
            }
        ]
    }

    // getCreator(productID).then((response) => ...)
    const creatorInfo = {
        id: '5812619',
        name: 'Ash',
        content:
            "Ash successfully combines a touch of couture with rock 'n' roll and a twist of casual-chic allure. The brand was created in 2000 by the French designer Patrick Ithier and the Italian entrepreneur Leonello Calvani. Women in search of beautifully edgy shoes simply love the label. Stay comfortable in the brand's signature cult-item, the wedged sneakers, not only do they look great with skirts or trousers, but will elevate any look. Ash's collections offer a great variety of styles, including romantic, boho and rock looks. The brand's flat or heeled shoes, sandals, sneakers and boots guarantee you night and day sartorial sassiness. Discover our Ash shoe selection in our Geneva and Lausanne stores or shop them online and enjoy free delivery in Switzerland and Liechtenstein.",
        linkLabel: 'Discover'
    }
    /**************** ENDOF / Some Mock Data ****************/

    return (
        <Box
            className="sf-product-detail-page"
            layerStyle="productPage"
            data-testid="product-details-page"
        >
            {/**************** PDP | HELMET ****************/}
            <Helmet>
                <title>{product?.pageTitle}</title>
                <meta name="description" content={product?.pageDescription} />
            </Helmet>

            {/*    Need styles here for this container */}
            {/**************** PDP | BREADCRUMB HEADER ****************/}
            <HStack h="63px" verticalAlign="middle">
                <Breadcrumb
                    categories={primaryCategory?.parentCategoryTree || []}
                    // product={product?.name}
                    // REPLACE
                    product={{
                        name: 'Incas embroidered suede boots'
                    }}
                ></Breadcrumb>

                <Spacer></Spacer>

                {/* Need to setup internationalized label here */}
                <Link variant="unstyled" href="/">
                    Back to Catalogue <ChevronRightIcon boxSize={4} mb="1px" mx="2px" />
                </Link>
            </HStack>

            {/**************** PDP | CONTENT ****************/}
            <Stack spacing={16}>
                {/**************** PDP | PRODUCT VIEW ****************/}
                <ProductView
                    product={product}
                    category={primaryCategory?.parentCategoryTree || []}
                    addToCart={(variant, quantity) => handleAddToCart(variant, quantity)}
                    addToWishlist={(_, quantity) => handleAddToWishlist(quantity)}
                    isProductLoading={isLoading}
                    isCustomerProductListLoading={!wishlist.isInitialized}
                />

                {/**************** PDP | PRODUCT FEATURES STACK ****************/}
                <VStack mt={6} align="center" justify="center" spacing={6}>
                    {/**************** PDP | PRODUCT FEATURES ****************/}
                    <Box w="full">
                        <Text
                            w="full"
                            as="h6"
                            mb={6}
                            fontSize="base"
                            textAlign="center"
                            textStyle="baseHeadingBold"
                        >
                            Features
                        </Text>
                        {productInfo.referenceInfo && (
                            <Flex
                                layerStyle="graybox"
                                textStyle="baseRegular"
                                fontSize="3xs"
                                letterSpacing="wider"
                                w="full"
                                paddingLeft={10}
                                paddingRight={10}
                            >
                                <VStack w="full" spacing={4}>
                                    {productInfo.referenceInfo.map((refInfo, index) => (
                                        <Flex key={index} w="full">
                                            <Text flex="1">{refInfo.label}:</Text>
                                            <Text flex="1">{refInfo.value}</Text>
                                        </Flex>
                                    ))}
                                </VStack>

                                <Center w="30%">
                                    <Divider
                                        orientation="vertical"
                                        borderColor="gray.300"
                                    ></Divider>
                                </Center>

                                <VStack w="full" spacing={4}>
                                    {productInfo.styleInfo.map((styleInfoItem, index) => (
                                        <Flex key={index} w="full">
                                            <Text flex="1">{styleInfoItem.label}:</Text>
                                            <Text flex="1">{styleInfoItem.value}</Text>
                                        </Flex>
                                    ))}
                                </VStack>
                            </Flex>
                        )}
                    </Box>

                    {/**************** PDP | PRODUCT AUTHOR ****************/}
                    {creatorInfo.name && creatorInfo.content && (
                        <ProductCreatorInfo {...creatorInfo}></ProductCreatorInfo>
                    )}
                </VStack>

                {/* Product Recommendations */}
                {/* <Stack spacing={16}>
                    <RecommendedProducts
                        title={<FormattedMessage defaultMessage="Complete The Set" />}
                        recommender={'complete-the-set'}
                        products={product && [product.id]}
                        mx={{base: -4, md: -8, lg: 0}}
                        shouldFetch={() => product?.id}
                    />

                    <RecommendedProducts
                        title={<FormattedMessage defaultMessage="You Might Also Like" />}
                        recommender={'pdp-similar-items'}
                        products={product && [product.id]}
                        mx={{base: -4, md: -8, lg: 0}}
                        shouldFetch={() => product?.id}
                    />

                    <RecommendedProducts
                        title={<FormattedMessage defaultMessage="Recently Viewed" />}
                        recommender={'viewed-recently-einstein'}
                        mx={{base: -4, md: -8, lg: 0}}
                    />
                </Stack> */}
            </Stack>
        </Box>
    )
}

ProductDetail.getTemplateName = () => 'product-detail'

ProductDetail.shouldGetProps = ({previousLocation, location}) => {
    const previousParams = new URLSearchParams(previousLocation?.search || '')
    const params = new URLSearchParams(location.search)

    // If the product changed via the pathname or `pid` param, allow updated
    // data to be retrieved.
    return (
        previousLocation?.pathname !== location.pathname ||
        previousParams.get('pid') !== params.get('pid')
    )
}

ProductDetail.getProps = async ({res, params, location, api}) => {
    const {productId} = params
    let category, product
    const urlParams = new URLSearchParams(location.search)

    product = await api.shopperProducts.getProduct({
        parameters: {
            id: urlParams.get('pid') || productId,
            allImages: true
        }
    })

    if (product?.primaryCategoryId) {
        category = await api.shopperProducts.getCategory({
            parameters: {id: product?.primaryCategoryId, levels: 1}
        })
    }

    // Set the `cache-control` header values similar to those on the product-list.
    if (res) {
        res.set('Cache-Control', 'max-age=900')
    }

    // The `commerce-isomorphic-sdk` package does not throw errors, so
    // we have to check the returned object type to inconsistencies.
    if (typeof product?.type === 'string') {
        throw new HTTPNotFound(product.detail)
    }
    if (typeof category?.type === 'string') {
        throw new HTTPNotFound(category.detail)
    }

    return {category, product}
}

ProductDetail.propTypes = {
    /**
     * The category object used for breadcrumb construction.
     */
    category: PropTypes.object,
    /**
     * The product object to be shown on the page..
     */
    product: PropTypes.object,
    /**
     * The current state of `getProps` when running this value is `true`, otherwise it's
     * `false`. (Provided internally)
     */
    isLoading: PropTypes.bool,
    /**
     * The current react router match object. (Provided internally)
     */
    match: PropTypes.object
}

export default ProductDetail
