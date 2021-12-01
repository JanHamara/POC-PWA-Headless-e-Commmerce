/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useHistory, useParams} from 'react-router-dom'
import {FormattedMessage, useIntl} from 'react-intl'
import {Helmet} from 'react-helmet'

// Components
import {
    Box,
    Flex,
    SimpleGrid,
    Img,
    Grid,
    Select,
    Center,
    Text,
    FormControl,
    Stack,
    Fade,
    Fragment,
    VStack,
    HStack,
    useDisclosure,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
    ModalOverlay,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'

// Project Components
import Pagination from '../../components/pagination'
import ProductTile, {Skeleton as ProductTileSkeleton} from '../../components/product-tile'
import {AboveLG, BelowLG, HideOnDesktop} from '../../components/responsive'
import Refinements from './partials/refinements'
import SelectedRefinements from './partials/selected-refinements'
import EmptySearchResults from './partials/empty-results'
import PageHeader from './partials/page-header'
import ProductGrid from '../../components/product-grid'

// Icons
import {FilterIcon, ChevronDownIcon} from '../../components/icons'
import {BuilderComponent, builder} from '@builder.io/react'

// Hooks
import {useLimitUrls, usePageUrls, useSortUrls, useSearchParams} from '../../hooks'
import {useToast} from '../../hooks/use-toast'
import useWishlist from '../../hooks/use-wishlist'
import {parse as parseSearchParams} from '../../hooks/use-search-params'
import {useCategories} from '../../hooks/use-categories'

// Others
import {HTTPNotFound} from 'pwa-kit-react-sdk/ssr/universal/errors'

// Constants
import {DEFAULT_LIMIT_VALUES, API_ERROR_MESSAGE} from '../../constants'
import useNavigation from '../../hooks/use-navigation'
import LoadingSpinner from '../../components/loading-spinner'
import PromoTile from '../../components/promo-tile'

// NOTE: You can ignore certain refinements on a template level by updating the below
// list of ignored refinements.
const REFINEMENT_DISALLOW_LIST = ['c_isNew']

/*
 * This is a simple product listing page. It displays a paginated list
 * of product hit objects. Allowing for sorting and filtering based on the
 * allowable filters and sort refinements.
 */
const ProductList = (props) => {
    const {
        searchQuery,
        productSearchResult,
        // eslint-disable-next-line react/prop-types
        staticContext,
        location,
        isLoading,
        ...rest
    } = props
    const {total, sortingOptions} = productSearchResult || {}

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [sortOpen, setSortOpen] = useState(false)
    const {formatMessage} = useIntl()
    const navigate = useNavigation()
    const history = useHistory()
    const params = useParams()
    const {categories} = useCategories()
    const toast = useToast()

    // Get the current category from global state.
    let category = undefined
    if (!searchQuery) {
        category = categories[params.categoryId]
    }

    const [promos, setPromosContent] = React.useState(null)

    React.useEffect(() => {
        //     builder
        //         .get('plp-promos', {})
        //         .promise()
        //         .then(setBuilderContentJson)
        fetch(
            'https://cdn.builder.io/api/v2/content/plp-promos?apiKey=d62f634c944f478d8867a4026cb3bf89'
        )
            .then((res) => res.json())
            .then((page) => {
                if (page) {
                    const {promos} = page.results[0].data
                    setPromosContent(promos)
                } else {
                    location.href = '/404'
                }
            })
    }, [])

    const basePath = `${location.pathname}${location.search}`

    // Reset scroll position when `isLoaded` becomes `true`.
    useEffect(() => {
        isLoading && window.scrollTo(0, 0)
        setFiltersLoading(isLoading)
    }, [isLoading])

    // Get urls to be used for pagination, page size changes, and sorting.
    const pageUrls = usePageUrls({total})
    const sortUrls = useSortUrls({options: sortingOptions})
    const limitUrls = useLimitUrls()

    // If we are loaded and still have no products, show the no results component.
    const showNoResults = !isLoading && productSearchResult && !productSearchResult?.hits

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

    /**************** Filters ****************/
    const [searchParams, {stringify: stringifySearchParams}] = useSearchParams()
    const [filtersLoading, setFiltersLoading] = useState(false)
    // Toggles filter on and off
    const toggleFilter = (value, attributeId, selected, allowMultiple = true) => {
        const searchParamsCopy = {...searchParams}

        // Remove the `offset` search param if present.
        delete searchParamsCopy.offset

        // If we aren't allowing for multiple selections, simply clear any value set for the
        // attribute, and apply a new one if required.
        if (!allowMultiple) {
            delete searchParamsCopy.refine[attributeId]

            if (!selected) {
                searchParamsCopy.refine[attributeId] = value.value
            }
        } else {
            // Get the attibute value as an array.
            let attributeValue = searchParamsCopy.refine[attributeId] || []
            let values = Array.isArray(attributeValue) ? attributeValue : attributeValue.split('|')

            // Either set the value, or filter the value out.
            if (!selected) {
                values.push(value.value)
            } else {
                values = values?.filter((v) => v !== value.value)
            }

            // Update the attribute value in the new search params.
            searchParamsCopy.refine[attributeId] = values

            // If the update value is an empty array, remove the current attribute key.
            if (searchParamsCopy.refine[attributeId].length === 0) {
                delete searchParamsCopy.refine[attributeId]
            }
        }

        navigate(`${location.pathname}?${stringifySearchParams(searchParamsCopy)}`)
    }

    // Clears all filters
    const resetFilters = () => {
        navigate(window.location.pathname)
    }

    let selectedSortingOptionLabel = productSearchResult?.sortingOptions?.find(
        (option) => option.id === productSearchResult?.selectedSortingOption
    )

    // API does not always return a selected sorting order
    if (!selectedSortingOptionLabel) {
        selectedSortingOptionLabel = productSearchResult?.sortingOptions[0]
    }

    return (
        <Box className="sf-product-list-page" data-testid="sf-product-list-page" {...rest}>
            <Helmet>
                <title>{category?.pageTitle}</title>
                <meta name="description" content={category?.pageDescription} />
                <meta name="keywords" content={category?.pageKeywords} />
            </Helmet>
            <Box w="full">
                {showNoResults ? (
                    <EmptySearchResults searchQuery={searchQuery} category={category} />
                ) : (
                    <>
                        {/* Header */}
                        <Stack
                            display={{base: 'none', lg: 'flex'}}
                            direction="column"
                            justify="flex-start"
                            align="flex-start"
                            spacing={0}
                            marginBottom={5}
                        >
                            <PageHeader
                                searchQuery={searchQuery}
                                category={category}
                                productSearchResult={productSearchResult}
                                isLoading={isLoading}
                            />

                            {/* <Box flex={1} paddingTop={'45px'}>
                            <SelectedRefinements
                                filters={productSearchResult?.refinements}
                                toggleFilter={toggleFilter}
                                selectedFilterValues={productSearchResult?.selectedRefinements}
                            />
                        </Box>
                        <Box paddingTop={'45px'}>
                            <Sort
                                sortUrls={sortUrls}
                                productSearchResult={productSearchResult}
                                basePath={basePath}
                            />
                        </Box> */}
                        </Stack>

                        <Box layerStyle="maxContainerNoPad">
                            {/* TO DO: You need to move PageHeader for mobile out of layerStyle="page" */}
                            <BelowLG>
                                <Stack spacing={0}>
                                    <PageHeader
                                        searchQuery={searchQuery}
                                        category={category}
                                        productSearchResult={productSearchResult}
                                        isLoading={isLoading}
                                    />
                                    <Stack
                                        display={{base: 'flex', lg: 'none'}}
                                        direction="row"
                                        justify={{base: 'center', md: 'flex-start'}}
                                        align="center"
                                        spacing={0}
                                        height={{base: 'auto', md: 12}}
                                        borderColor="gray.100"
                                        mx="auto"
                                        paddingLeft={{base: 0, lg: 8, xl: 10, max: 4}}
                                        paddingRight={{base: 0, lg: 8, xl: 10, max: 4}}
                                    >
                                        <Button
                                            colorScheme="black"
                                            variant="mobileFilter"
                                            onClick={onOpen}
                                        >
                                            <FormattedMessage defaultMessage="Filter" />
                                        </Button>
                                        <Button
                                            colorScheme="black"
                                            variant="mobileFilter"
                                            onClick={() => setSortOpen(true)}
                                        >
                                            {formatMessage(
                                                {
                                                    defaultMessage: 'Sort By'
                                                },
                                                {
                                                    /* {
                                                        sortOption:
                                                            selectedSortingOptionLabel?.label
                                                    } */
                                                }
                                            )}
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Box marginBottom={4}>
                                    <SelectedRefinements
                                        filters={productSearchResult?.refinements}
                                        toggleFilter={toggleFilter}
                                        selectedFilterValues={
                                            productSearchResult?.selectedRefinements
                                        }
                                    />
                                </Box>
                            </BelowLG>

                            {/* Product Grid  */}
                            <ProductGrid
                                isLoading={isLoading}
                                toggleFilter={toggleFilter}
                                productSearchResult={productSearchResult}
                                selectedFilters={searchParams.refine}
                                searchParams={searchParams}
                                sortUrls={sortUrls}
                                basePath={basePath}
                                promos={promos ? promos : null}
                            ></ProductGrid>
                        </Box>
                    </>
                )}
            </Box>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="full"
                motionPreset="slideInBottom"
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent top={0} marginTop={0}>
                    <ModalHeader>
                        <Text fontWeight="bold" fontSize="2xl">
                            <FormattedMessage defaultMessage="Filter" />
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={4}>
                        {filtersLoading && <LoadingSpinner />}
                        <Refinements
                            toggleFilter={toggleFilter}
                            filters={productSearchResult?.refinements}
                            selectedFilters={productSearchResult?.selectedRefinements}
                        />
                    </ModalBody>

                    <ModalFooter
                        // justify="space-between"
                        display="block"
                        width="full"
                        borderTop="1px solid"
                        borderColor="gray.100"
                        paddingBottom={10}
                    >
                        <Stack>
                            <Button width="full" onClick={onClose}>
                                {formatMessage(
                                    {
                                        defaultMessage: 'View {prroductCount} items'
                                    },
                                    {
                                        prroductCount: productSearchResult?.total
                                    }
                                )}
                            </Button>
                            <Button width="full" variant="outline" onClick={() => resetFilters()}>
                                <FormattedMessage defaultMessage="Clear Filters" />
                            </Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Drawer
                placement="bottom"
                isOpen={sortOpen}
                onClose={() => setSortOpen(false)}
                size="sm"
                motionPreset="slideInBottom"
                scrollBehavior="inside"
                isFullHeight={false}
                height="50%"
            >
                <DrawerOverlay />
                <DrawerContent marginTop={0}>
                    <DrawerHeader boxShadow="none">
                        <Text fontWeight="bold" fontSize="2xl">
                            <FormattedMessage defaultMessage="Sort By" />
                        </Text>
                    </DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack spacing={2}>
                            {sortUrls.map((href, idx) => (
                                <Button
                                    width="full"
                                    onClick={() => {
                                        setSortOpen(false)
                                        history.push(href)
                                    }}
                                    fontSize={'xs'}
                                    key={idx}
                                    marginTop={0}
                                    variant="ghost"
                                >
                                    <Text
                                        as={
                                            selectedSortingOptionLabel?.label ===
                                                productSearchResult?.sortingOptions[idx]?.label &&
                                            'u'
                                        }
                                    >
                                        {productSearchResult?.sortingOptions[idx]?.label}
                                    </Text>
                                </Button>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

ProductList.getTemplateName = () => 'product-list'

ProductList.shouldGetProps = ({previousLocation, location}) =>
    !previousLocation ||
    previousLocation.pathname !== location.pathname ||
    previousLocation.search !== location.search

ProductList.getProps = async ({res, params, location, api}) => {
    const {categoryId} = params
    const urlParams = new URLSearchParams(location.search)
    let searchQuery = urlParams.get('q')
    let isSearch = false

    if (searchQuery) {
        isSearch = true
    }
    // In case somebody navigates to /search without a param
    if (!categoryId && !isSearch) {
        // We will simulate search for empty string
        return {searchQuery: ' ', productSearchResult: {}}
    }

    const searchParams = parseSearchParams(location.search, false)

    if (!searchParams.refine.includes(`cgid=${categoryId}`) && categoryId) {
        searchParams.refine.push(`cgid=${categoryId}`)
    }

    // only search master products
    searchParams.refine.push('htype=master')

    // Set the `cache-control` header values to align with the Commerce API settings.
    if (res) {
        res.set('Cache-Control', 'public, must-revalidate, max-age=900')
    }

    const [category, productSearchResult] = await Promise.all([
        isSearch
            ? Promise.resolve()
            : api.shopperProducts.getCategory({
                  parameters: {id: categoryId, levels: 0}
              }),
        api.shopperSearch.productSearch({
            parameters: searchParams
        })
    ])

    // Apply disallow list to refinements.
    productSearchResult.refinements = productSearchResult?.refinements?.filter(
        ({attributeId}) => !REFINEMENT_DISALLOW_LIST.includes(attributeId)
    )

    // The `isomorphic-sdk` returns error objects when they occur, so we
    // need to check the category type and throw if required.
    if (category?.type?.endsWith('category-not-found')) {
        throw new HTTPNotFound(category.detail)
    }

    return {searchQuery: searchQuery, productSearchResult}
}

ProductList.propTypes = {
    /**
     * The search result object showing all the product hits, that belong
     * in the supplied category.
     */
    productSearchResult: PropTypes.object,
    /*
     * Indicated that `getProps` has been called but has yet to complete.
     *
     * Notes: This prop is internally provided.
     */
    isLoading: PropTypes.bool,
    /*
     * Object that represents the current location, it consists of the `pathname`
     * and `search` values.
     *
     * Notes: This prop is internally provided.
     */
    location: PropTypes.object,
    searchQuery: PropTypes.string,
    onAddToWishlistClick: PropTypes.func,
    onRemoveWishlistClick: PropTypes.func
}

export default ProductList
