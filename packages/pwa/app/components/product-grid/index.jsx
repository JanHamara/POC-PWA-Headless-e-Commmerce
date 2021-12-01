/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useHistory, useParams} from 'react-router-dom'
import {FormattedMessage, useIntl} from 'react-intl'
import {
    Box,
    Fade,
    Flex,
    Button,
    Select,
    FormControl,
    Center,
    Grid,
    Text,
    HStack,
    VStack,
    SimpleGrid
} from '@chakra-ui/react'

import Refinements from '../../pages/product-list/partials/refinements'
import ProductTile, {Skeleton as ProductTileSkeleton} from '../../components/product-tile'

// Hooks & Utils
import {isServer} from '../../utils/utils'
import {useToast} from '../../hooks/use-toast'
import useWishlist from '../../hooks/use-wishlist'
import {usePageUrls, useLimitUrls} from '../../hooks'

import useNavigation from '../../hooks/use-navigation'

import {AboveLG} from '../responsive'
import PromoTile from '../promo-tile'
import Pagination from '../pagination'

import {DEFAULT_LIMIT_VALUES, API_ERROR_MESSAGE} from '../../constants'

const ProductGrid = ({
    isLoading = true,
    toggleFilter,
    productSearchResult,
    selectedFilters,
    searchParams,
    sortUrls,
    basePath,
    promos = []
}) => {
    const [filtersLoading, setFiltersLoading] = useState(false)

    const {total, sortingOptions} = productSearchResult || {}

    const toast = useToast()
    const navigate = useNavigation()
    const pageUrls = usePageUrls({total})
    const limitUrls = useLimitUrls()

    /**************** Wishlist ****************/
    const wishlist = useWishlist()

    // keep track of the items has been add/remove to/from wishlist
    const [wishlistLoading, setWishlistLoading] = useState([])
    const addItemToWishlist = async (product) => {
        try {
            setWishlistLoading([...wishlistLoading, product.productId])
            await wishlist.createListItem({
                id: product.productId,
                quantity: 1
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
                    // it would be better if we could use <Button as={Link}>
                    // but unfortunately the Link component is not compatible
                    // with Chakra Toast, since the ToastManager is rendered via portal
                    // and the toast doesn't have access to intl provider, which is a
                    // requirement of the Link component.
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
        } finally {
            setWishlistLoading(wishlistLoading.filter((id) => id !== product.productId))
        }
    }
    const removeItemFromWishlist = async (product) => {
        try {
            setWishlistLoading([...wishlistLoading, product.productId])
            await wishlist.removeListItemByProductId(product.productId)
            toast({
                title: formatMessage({defaultMessage: 'Item removed from wishlist'}),
                status: 'success'
            })
        } catch {
            toast({
                title: formatMessage(
                    {defaultMessage: '{errorMessage}'},
                    {errorMessage: API_ERROR_MESSAGE}
                ),
                status: 'error'
            })
        } finally {
            setWishlistLoading(wishlistLoading.filter((id) => id !== product.productId))
        }
    }

    /**************** History ****************/
    const history = useHistory()

    // Reset scroll position when `isLoaded` becomes `true`.
    useEffect(() => {
        isLoading && window.scrollTo(0, 0)
        setFiltersLoading(isLoading)
    }, [isLoading])

    return (
        <Grid templateColumns={{base: '1fr', lg: '295px 1fr', '2xl': '395px 1fr'}} columnGap={6}>
            {/* SIDE COLUMN */}
            <VStack w="full" spacing="60px" display={{base: 'none', lg: 'flex'}} px={5}>
                <Center w="full" h={10}>
                    <Text
                        w="full"
                        as="h6"
                        fontSize="base"
                        textAlign="center"
                        textStyle="baseHeadingBold"
                    >
                        <FormattedMessage defaultMessage="Filter by" />
                    </Text>
                </Center>

                <Refinements
                    isLoading={filtersLoading}
                    toggleFilter={toggleFilter}
                    filters={productSearchResult?.refinements}
                    selectedFilters={selectedFilters}
                />
            </VStack>
            {/* END OF - SIDE COLUMN */}

            {/* PRODUCT GRID */}
            <Box>
                <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    w="full"
                    h={10}
                    backgroundColor="bg"
                    px={{base: 8, lg: 4}}
                    py={2}
                >
                    {isServer
                        ? productSearchResult && (
                              <Text textStyle="secondaryBold" fontSize="sm">
                                  {productSearchResult.total} products
                              </Text>
                          )
                        : !isLoading && (
                              <Fade in={true}>
                                  <Text textStyle="secondaryBold" fontSize="sm">
                                      {productSearchResult?.total} products
                                  </Text>
                              </Fade>
                          )}

                    {/* Sorting Options */}
                    <HStack spacing={4}>
                        <Select
                            minW={{base: '170px', lg: '200px'}}
                            placeholder="Items per page"
                            variant="sort"
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                        <AboveLG>
                            <Sort
                                sortUrls={sortUrls}
                                productSearchResult={productSearchResult}
                                basePath={basePath}
                            />
                        </AboveLG>
                    </HStack>
                </Flex>

                <SimpleGrid
                    columns={{base: 1, md: 2, lg: 2, xl: 4}}
                    spacingX={0}
                    // spacingY={{base: 6, lg: 0}}
                    maxW={{base: '80vw', md: '95vw', lg: 'full'}}
                    mx="auto"
                    mt={{base: 4, md: 0}}
                >
                    {isLoading || !productSearchResult
                        ? new Array(searchParams.limit)
                              .fill(0)
                              .map((value, index) => <ProductTileSkeleton key={index} />)
                        : productSearchResult.hits.map((productSearchItem, idx) => {
                              const productId = productSearchItem.productId
                              const isInWishlist = !!wishlist.findItemByProductId(productId)

                              return promos && promos[0] && idx == promos[0].position ? (
                                  <PromoTile
                                      img={promos[0].img}
                                      title={promos[0].title}
                                      subtitle={promos[0].subtitle}
                                      href={promos[0].href}
                                  />
                              ) : promos && promos[1] && idx == promos[1].position ? (
                                  <PromoTile
                                      img={promos[1].img}
                                      title={promos[1].title}
                                      subtitle={promos[1].subtitle}
                                      href={promos[1].href}
                                  />
                              ) : (
                                  <ProductTile
                                      data-testid={`sf-product-tile-${productSearchItem.productId}`}
                                      key={productSearchItem.productId}
                                      product={productSearchItem}
                                      enableFavourite={false}
                                      isFavourite={isInWishlist}
                                      idx={idx}
                                      onFavouriteToggle={(isFavourite) => {
                                          const action = isFavourite
                                              ? addItemToWishlist
                                              : removeItemFromWishlist
                                          return action(productSearchItem)
                                      }}
                                  />
                              )
                          })}
                </SimpleGrid>

                {/* Footer */}
                <Flex
                    justifyContent={['center']}
                    paddingTop={{base: 8, lg: 16}}
                    paddingBottom={{base: 8, md: 0}}
                >
                    <Pagination currentURL={basePath} urls={pageUrls} />

                    {/*
                                Our design doesn't call for a page size select. Show this element if you want
                                to add one to your design.
                            */}
                    <Select
                        display="none"
                        value={basePath}
                        onChange={({target}) => {
                            history.push(target.value)
                        }}
                    >
                        {limitUrls.map((href, index) => (
                            <option key={href} value={href}>
                                {DEFAULT_LIMIT_VALUES[index]}
                            </option>
                        ))}
                    </Select>
                </Flex>
            </Box>
        </Grid>
    )
}

ProductGrid.propTypes = {
    /*
     * Indicated that `getProps` has been called but has yet to complete.
     *
     * Notes: This prop is internally provided.
     */
    isLoading: PropTypes.bool,
    /*
     * toggleFilter function
     */
    toggleFilter: PropTypes.func,
    productSearchResult: PropTypes.object,
    selectedFilters: PropTypes.object,
    sortUrls: PropTypes.array,
    basePath: PropTypes.string,
    searchParams: PropTypes.object,
    promos: PropTypes.array
}

export default ProductGrid

const Sort = ({sortUrls, productSearchResult, basePath, ...otherProps}) => {
    const intl = useIntl()
    const history = useHistory()

    return (
        <FormControl data-testid="sf-product-list-sort" id="page_sort" width="auto" {...otherProps}>
            <Select
                value={basePath.replace(/(offset)=(\d+)/i, '$1=0')}
                placeholder="Sort By:"
                onChange={({target}) => {
                    history.push(target.value)
                }}
                variant="sort"
            >
                {sortUrls.map((href, index) => (
                    <option key={href} value={href}>
                        {intl.formatMessage(
                            {
                                defaultMessage: 'Sort By:  {sortOption}'
                            },
                            {
                                sortOption: productSearchResult?.sortingOptions[index]?.label
                            }
                        )}
                    </option>
                ))}
            </Select>
        </FormControl>
    )
}
Sort.propTypes = {
    sortUrls: PropTypes.array,
    productSearchResult: PropTypes.object,
    basePath: PropTypes.string
}
