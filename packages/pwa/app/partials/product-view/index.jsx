/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useHistory, useLocation} from 'react-router-dom'
import {useIntl} from 'react-intl'

import {
    AspectRatio,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
    Heading,
    Button,
    Link,
    Skeleton,
    Image,
    Box,
    Text,
    VStack,
    Fade,
    useTheme,
    Divider,
    Select
} from '@chakra-ui/react'
import {
    ChevronRightIcon,
    HeartSolidIcon,
    BullhornIcon,
    LocationIcon,
    BgClub,
    MinusIcon,
    PlusIcon
} from '../../components/icons'

import {useProduct} from '../../hooks'
import {useAddToCartModalContext} from '../../hooks/use-add-to-cart-modal'

// project components
import SwatchGroup from '../../components/swatch-group'
import Swatch from '../../components/swatch-group/swatch'
import ImageGallery from '../../components/image-gallery'
import Breadcrumb from '../../components/breadcrumb'
import withRegistration from '../../hoc/with-registration'
import {useCurrency} from '../../hooks'
import {Skeleton as ImageGallerySkeleton} from '../../components/image-gallery'
import {HideOnDesktop, HideOnMobile} from '../../components/responsive'
import QuantityPicker from '../../components/quantity-picker'

const ProductViewHeader = ({name, brand, price, currency, category}) => {
    const intl = useIntl()
    const {currency: activeCurrency} = useCurrency()
    return (
        <VStack mr={4} spacing={2} align="flex-start" marginBottom={[4, 4, 4, 0, 0]}>
            {category && (
                <Skeleton isLoaded={category} width={64}>
                    <Breadcrumb categories={category} />
                </Skeleton>
            )}

            {/* Title */}
            <Skeleton isLoaded={name}>
                <Box textStyle="productName">{`${name}`}</Box>
            </Skeleton>

            {/* Brand */}
            <Skeleton isLoaded={brand} mt={1}>
                <Box textStyle="productBrand">{`${brand}`}</Box>
            </Skeleton>

            {/* Price */}
            <Skeleton isLoaded={price} mt={4} width={32}>
                <Flex alignItems="center">
                    <Text textStyle="productPriceCurrency">
                        {currency ? currency : activeCurrency ? activeCurrency : ''}
                    </Text>
                    <Text textStyle="productPrice" aria-label="price">
                        {price.toFixed(2)}
                    </Text>
                </Flex>
            </Skeleton>
        </VStack>
    )
}

ProductViewHeader.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    category: PropTypes.array
}

const ButtonWithRegistration = withRegistration(Button)

/**
 * Render a product detail view that includes name, image gallery, price,
 * variant selections, action buttons
 */
const ProductView = ({
    product,
    showFullLink = false,
    imageSize = 'md',
    isWishlistLoading = false,
    addToCart,
    updateCart,
    addToWishlist,
    updateWishlist,
    isProductLoading
}) => {
    const intl = useIntl()
    const history = useHistory()
    const location = useLocation()
    const {
        isOpen: isAddToCartModalOpen,
        onOpen: onAddToCartModalOpen,
        onClose: onAddToCartModalClose
    } = useAddToCartModalContext()
    const theme = useTheme()

    const {
        showLoading,
        showInventoryMessage,
        inventoryMessage,
        quantity,
        minOrderQuantity,
        setQuantity,
        variant,
        variationParams,
        variationAttributes,
        stockLevel,
        stepQuantity
    } = useProduct(product)
    const canAddToWishlist = !isProductLoading
    const canOrder =
        !isProductLoading &&
        variant?.orderable &&
        parseInt(quantity) > 0 &&
        parseInt(quantity) <= stockLevel

    // REPLACE - Additional Mock Data
    const reassurances = ['Quick Delivery', 'To your door', 'Easy Returns']

    const renderActionButtons = () => {
        const buttons = []

        const handleCartItem = async () => {
            if (!addToCart && !updateCart) return null
            if (updateCart) {
                await updateCart(variant, quantity)
                return
            }
            await addToCart(variant, quantity)
            onAddToCartModalOpen({product, quantity})
        }

        const handleWishlistItem = async () => {
            if (!updateWishlist && !addToWishlist) return null
            if (updateWishlist) {
                updateWishlist(variant, quantity)
                return
            }
            addToWishlist(variant, quantity)
        }

        if (addToCart || updateCart) {
            buttons.push(
                <Button
                    key="cart-button"
                    onClick={handleCartItem}
                    // disabled={!canOrder}
                    width="full"
                    variant="solid"
                    marginBottom={4}
                >
                    {updateCart
                        ? intl.formatMessage({defaultMessage: 'Update'})
                        : intl.formatMessage({defaultMessage: 'Add to shopping bag'})}

                    <ChevronRightIcon boxSize={4} mb="1px" mx="2px" color="white" />
                </Button>
            )
        }

        if (addToWishlist || updateWishlist) {
            buttons.push(
                <Flex justify="center" w={{base: 'full'}}>
                    <Link
                        key="wishlist-button"
                        onClick={handleWishlistItem}
                        disabled={isWishlistLoading || !canAddToWishlist}
                        isLoading={isWishlistLoading}
                        variant="gray"
                        fontSize="4xs"
                        fontWeight="normal"
                        p="5px 15px"
                    >
                        <HeartSolidIcon boxSize={4} mb="1px" mr={2} fill="gray.500" />
                        {updateWishlist
                            ? intl.formatMessage({defaultMessage: 'Update'})
                            : intl.formatMessage({defaultMessage: 'Wish-List'})}
                    </Link>

                    <Link
                        key="share-button"
                        // onClick={handleShareItem}
                        disabled={isWishlistLoading || !canAddToWishlist}
                        isLoading={isWishlistLoading}
                        variant="gray"
                        fontSize="4xs"
                        fontWeight="normal"
                        p="5px 15px"
                    >
                        <BullhornIcon boxSize={4} mb="1px" mr={2} color="gray.500" />

                        {updateWishlist
                            ? intl.formatMessage({defaultMessage: 'Update'})
                            : intl.formatMessage({defaultMessage: 'Share'})}
                    </Link>
                </Flex>
            )
        }

        return buttons
    }

    useEffect(() => {
        if (isAddToCartModalOpen) {
            onAddToCartModalClose()
        }
    }, [location.pathname])

    return (
        <Flex direction={'column'} data-testid="product-view">
            {/* Basic information etc. title, price, breadcrumb*/}
            {/* Mobile Only */}
            {/* <Box display={['block', 'block', 'block', 'none']}>
                <ProductViewHeader
                    name={product?.name}
                    price={product?.price}
                    currency={product?.currency}
                    category={category}
                />
            </Box> */}
            <Flex direction={{base: 'column', lg: 'row'}}>
                <Box
                    flex={1}
                    mr={{base: 0, md: 6}}
                    borderTop={{base: 0, md: '1px solid #bebebe'}}
                    pt={12}
                >
                    {product ? (
                        <>
                            <ImageGallery
                                size={imageSize}
                                imageGroups={product.imageGroups}
                                selectedVariationAttributes={variationParams}
                            />
                            <HideOnMobile>
                                {showFullLink && product && (
                                    <Link to={`/product/${product.master.masterId}`}>
                                        <Text color="blue.600">
                                            {intl.formatMessage({
                                                defaultMessage: 'See full details'
                                            })}
                                        </Text>
                                    </Link>
                                )}
                            </HideOnMobile>
                        </>
                    ) : (
                        <ImageGallerySkeleton />
                    )}
                </Box>

                {/* Variations & Quantity Selector */}
                <VStack
                    align="stretch"
                    spacing={9}
                    flex={1}
                    marginBottom={[16, 16, 16, 0, 0]}
                    pl={{base: 0, md: 36}}
                    pr={{base: 0, md: 8}}
                    pt={{base: 3, md: 0}}
                >
                    <Box>
                        <ProductViewHeader
                            // name={product?.name}
                            // brand="Balenciaga"
                            // price={product?.price}
                            // currency={product?.currency}
                            // breadcrumb={false}
                            //
                            // Bongenie Test Data
                            // REPLACE
                            name="Incas embroidered suede boots"
                            brand="ASH"
                            price={450.0}
                            currency="CHF"
                            breadcrumb={false}
                        />
                    </Box>
                    <VStack
                        align="center"
                        spacing={5}
                        w={{base: 'full', md: 'container.xs'}}
                        maxW={{base: 'full', md: 'container.xs'}}
                        alignSelf="center"
                    >
                        {/*
                            Customize the skeletons shown for attributes to suit your needs. At the point
                            that we show the skeleton we do not know how many variations are selectable. So choose
                            a skeleton that will meet most of your needs.
                        */}
                        {showLoading ? (
                            <>
                                {/* First Attribute Skeleton */}
                                <Skeleton height={6} width={32} />
                                <Skeleton height={20} width={64} />

                                {/* Second Attribute Skeleton */}
                                <Skeleton height={6} width={32} />
                                <Skeleton height={20} width={64} />
                            </>
                        ) : (
                            <>
                                {/* Attribute Swatches */}
                                {variationAttributes.map((variationAttribute) => {
                                    const {
                                        id,
                                        name,
                                        selectedValue,
                                        values = []
                                    } = variationAttribute
                                    return name == 'Swatch' ? (
                                        <SwatchGroup
                                            key={id}
                                            onChange={(_, href) => {
                                                if (!href) return
                                                history.replace(href)
                                            }}
                                            variant={id === 'color' ? 'circle' : 'square'}
                                            value={selectedValue?.value}
                                            displayName={selectedValue?.name || ''}
                                            label={name}
                                        >
                                            {values.map(({href, name, image, value, orderable}) => (
                                                <Swatch
                                                    key={value}
                                                    href={href}
                                                    disabled={!orderable}
                                                    value={value}
                                                    name={name}
                                                >
                                                    {image ? (
                                                        <Box
                                                            height="100%"
                                                            width="100%"
                                                            minWidth="32px"
                                                            backgroundRepeat="no-repeat"
                                                            backgroundSize="cover"
                                                            backgroundColor={name.toLowerCase()}
                                                            backgroundImage={
                                                                image
                                                                    ? `url(${image.disBaseLink})`
                                                                    : ''
                                                            }
                                                        />
                                                    ) : (
                                                        name
                                                    )}
                                                </Swatch>
                                            ))}
                                        </SwatchGroup>
                                    ) : (
                                        name == 'Size' && (
                                            <Flex direction="column" w="full" align="center">
                                                <Link variant="gray" mb={1}>
                                                    Size Guide
                                                </Link>
                                                <Select placeholder="Select your size">
                                                    {values.map(({name, value}, index) => (
                                                        <option key={index} value={value}>
                                                            {name}
                                                        </option>
                                                    ))}
                                                </Select>
                                            </Flex>
                                        )
                                    )
                                })}
                            </>
                        )}
                        {/* Quantity Selector */}
                        {/* <VStack align="stretch" maxWidth={'200px'}>
                            <Box fontWeight="bold">
                                <label htmlFor="quantity">
                                    {intl.formatMessage({
                                        defaultMessage: 'Quantity'
                                    })}
                                    :
                                </label>
                            </Box>

                            <QuantityPicker
                                id="quantity"
                                step={stepQuantity}
                                value={quantity}
                                min={minOrderQuantity}
                                onChange={(stringValue, numberValue) => {
                                    // Set the Quantity of product to value of input if value number
                                    if (numberValue >= 0) {
                                        setQuantity(numberValue)
                                    } else if (stringValue === '') {
                                        // We want to allow the use to clear the input to start a new input so here we set the quantity to '' so NAN is not displayed
                                        // User will not be able to add '' qauntity to the cart due to the add to cart button enablement rules
                                        setQuantity(stringValue)
                                    }
                                }}
                                onBlur={(e) => {
                                    // Default to 1the `minOrderQuantity` if a user leaves the box with an invalid value
                                    const value = e.target.value
                                    if (parseInt(value) < 0 || value === '') {
                                        setQuantity(minOrderQuantity)
                                    }
                                }}
                                onFocus={(e) => {
                                    // This is useful for mobile devices, this allows the user to pop open the keyboard and set the
                                    // new quantity with one click. NOTE: This is something that can be refactored into the parent
                                    // component, potentially as a prop called `selectInputOnFocus`.
                                    e.target.select()
                                }}
                            />
                        </VStack>
                        <HideOnDesktop>
                            {showFullLink && product && (
                                <Link to={`/product/${product.master.masterId}`}>
                                    <Text color="blue.600">
                                        {intl.formatMessage({
                                            defaultMessage: 'See full details'
                                        })}
                                    </Text>
                                </Link>
                            )}
                        </HideOnDesktop> */}

                        <Flex direction="column" w="full">
                            {!showLoading && showInventoryMessage && (
                                <Fade in={true}>
                                    <Text color="red.600" fontWeight={600} marginBottom={8}>
                                        {inventoryMessage}
                                    </Text>
                                </Fade>
                            )}
                            {renderActionButtons()}
                        </Flex>

                        {reassurances && (
                            <Box>
                                <Flex mt={5} h={5} justify="center">
                                    {reassurances.map((item, index) => (
                                        <Flex h={5} textStyle="baseBold" fontSize="2xs" key={index}>
                                            {item}{' '}
                                            {reassurances.length - 1 !== index && (
                                                <Divider
                                                    mx={2}
                                                    orientation="vertical"
                                                    borderColor="gray.800"
                                                    borderLeftWidth="2px"
                                                ></Divider>
                                            )}
                                        </Flex>
                                    ))}
                                </Flex>
                            </Box>
                        )}
                    </VStack>

                    <VStack align="center" spacing={5} w="full" maxW="full">
                        {/* Click and Collect Box */}
                        <Flex w="full" direction="column" justify="center" align="center">
                            {/* Click-and-collect Asset */}
                            <Box boxSize="55px">
                                <AspectRatio ratio={1 / 1}>
                                    <Image
                                        src="https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1635942965/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/click-and-collect_n5xsvo.png"
                                        alt="click-and-collect-icon"
                                    ></Image>
                                </AspectRatio>
                            </Box>

                            <VStack spacing={1.5} marginTop={-3} layerStyle="graybox">
                                <Text textStyle="baseRegular" fontSize="3xs">
                                    Reserve and pick up in store
                                </Text>
                                <Text textStyle="baseBold" fontSize="2xs">
                                    Select attributes to see availability
                                </Text>
                            </VStack>
                        </Flex>

                        {/* Location Availability Box */}
                        <Flex w="full" direction="column" justify="center" align="center">
                            {/* Click-and-collect Asset */}
                            <Box boxSize="30px">
                                <AspectRatio ratio={1 / 1}>
                                    <LocationIcon></LocationIcon>
                                </AspectRatio>
                            </Box>

                            <VStack spacing={1.5} marginTop={-2} layerStyle="graybox">
                                <Text textStyle="baseBold" fontSize="2xs">
                                    Select attributes to see availability
                                </Text>
                            </VStack>
                        </Flex>

                        {/* BG CLub Info Box */}
                        <Flex
                            w="full"
                            direction="row"
                            justify="center"
                            align="center"
                            layerStyle="graybox"
                        >
                            <BgClub w="52px" h="18px" fill="gray.900" />

                            <Divider
                                mx={8}
                                orientation="vertical"
                                borderColor="gray.400"
                                borderLeftWidth="1px"
                            ></Divider>

                            <Text textAlign="center" textStyle="secondaryRegular" fontSize="2xs">
                                With our tailor-made loyalty program <strong>BG Club</strong>, you
                                accumulate points with each purchase. Already member? Sign in. Not
                                one of our privileged members yet? Sign up quickly.
                            </Text>
                        </Flex>

                        <Accordion w="full" allowMultiple>
                            <AccordionItem>
                                {({isExpanded}) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex="1" textAlign="left">
                                                    Product Details
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize="12px" />
                                                ) : (
                                                    <PlusIcon fontSize="12px" />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel>
                                            Embroidered with ethnical Inca art inspired patterns,
                                            these <strong>ASH</strong> boots will elevate any
                                            outfit! They are made of distressed looking suede, and
                                            are lined with smooth leather. A zipper is concealed on
                                            the insides of the ankles. Pointy tips, leather soles
                                            and Cuban heels complete the look.
                                            <br />
                                            <br />
                                            <li>Heel: 4cm</li>
                                            <li>Shaft height: 32cm</li>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </VStack>
                </VStack>
            </Flex>
        </Flex>
    )
}

ProductView.propTypes = {
    product: PropTypes.object,
    category: PropTypes.array,
    isProductLoading: PropTypes.bool,
    isWishlistLoading: PropTypes.bool,
    addToCart: PropTypes.func,
    addToWishlist: PropTypes.func,
    updateCart: PropTypes.func,
    updateWishlist: PropTypes.func,
    showFullLink: PropTypes.bool,
    imageSize: PropTypes.oneOf(['sm', 'md'])
}

export default ProductView
