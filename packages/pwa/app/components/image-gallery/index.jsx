/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useState, useMemo, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

// Chakra Components
import {
    AspectRatio,
    Box,
    Img,
    Flex,

    // Hooks
    Skeleton as ChakraSkeleton,
    ListItem,
    List,
    useMultiStyleConfig
} from '@chakra-ui/react'

import {ChevronRightIcon, ChevronLeftIcon} from '../icons'

import {findImageGroupBy} from '../../utils/image-groups-utils'

import {HideOnMobile} from '../responsive'

const EnterKeyNumber = 13

const LARGE = 'large'
const SMALL = 'small'

/**
 * The skeleton representation of the image gallery component. Use this component while
 * you are waiting for product data to be returnd from the server.
 */
export const Skeleton = ({size}) => {
    const styles = useMultiStyleConfig('ImageGallery', {size})

    return (
        <Box data-testid="sf-image-gallery-skeleton">
            <Flex flexDirection="column">
                <AspectRatio ratio={1} {...styles.heroImageSkeleton}>
                    <ChakraSkeleton />
                </AspectRatio>
                <Flex>
                    {new Array(4).fill(0).map((_, index) => (
                        <AspectRatio ratio={1} {...styles.thumbnailImageSkeleton} key={index}>
                            <ChakraSkeleton />
                        </AspectRatio>
                    ))}
                </Flex>
            </Flex>
        </Box>
    )
}

Skeleton.propTypes = {
    size: PropTypes.bool
}

/**
 * The image gallery displays a hero image and thumbnails below it. You can control which
 * image groups that are use by passing in the current selected variation values.
 */
const ImageGallery = ({imageGroups = [], selectedVariationAttributes = {}, size}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const styles = useMultiStyleConfig('ImageGallery', {size})
    const location = useLocation()

    // Get the 'hero' image for the current variation.
    const heroImageGroup = useMemo(
        () =>
            findImageGroupBy(imageGroups, {
                viewType: LARGE,
                selectedVariationAttributes
            }),
        [selectedVariationAttributes]
    )

    useEffect(() => {
        // reset the selected index when location search changes
        setSelectedIndex(0)
    }, [location.search])

    // Get a memoized image group used for the thumbnails. We use the `useMemo` hook
    // so we don't have to waste time filtering the image groups each render if the
    // selected variation attributes haven't changed.
    const thumbnailImageGroup = useMemo(
        () =>
            findImageGroupBy(imageGroups, {
                viewType: SMALL,
                selectedVariationAttributes
            }),
        [selectedVariationAttributes]
    )

    // const heroImage = heroImageGroup?.images?.[selectedIndex]
    // const thumbnailImages = thumbnailImageGroup?.images || []
    // REPLACE (this is just to mock Bongenie PDP page)
    const thumbnailImages = [
        {
            disBaseLink:
                'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1635328836/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/product-1_pwxcv5.jpg',
            alt: 'product-thumbnail'
        },
        {
            disBaseLink:
                'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1635328836/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/product-2_exvbzi.jpg',
            alt: 'product-thumbnail'
        },
        {
            disBaseLink:
                'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1635328836/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/product-3_bq83sq.jpg',
            alt: 'product-thumbnail'
        },
        {
            disBaseLink:
                'https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1635328836/temp/POC:%20PWA%20%2B%20SF%20B2C%20Commerce%20Cloud/product-4_lqgxdj.jpg',
            alt: 'product-thumbnail'
        }
    ]

    const heroImage = selectedIndex ? thumbnailImages[selectedIndex] : thumbnailImages[0]

    return (
        <Flex
            direction={{base: 'column', md: 'row'}}
            wrap={'nowrap'}
            maxW={{base: '100%', md: 'calc(100% - 88px)'}}
        >
            <HideOnMobile>
                <List
                    display={'flex'}
                    flexDirection={'column'}
                    flexWrap={'nowrap'}
                    w={24}
                    maxW={24}
                >
                    {thumbnailImages.map((image, index) => {
                        const selected = index === selectedIndex
                        return (
                            <ListItem
                                {...styles.thumbnailImageItem}
                                tabIndex={0}
                                key={index}
                                data-testid="image-gallery-thumbnails"
                                onKeyDown={(e) => {
                                    if (e.keyCode === EnterKeyNumber) {
                                        return setSelectedIndex(index)
                                    }
                                }}
                                onClick={() => setSelectedIndex(index)}
                                opacity={`${selected ? 1 : 0.4}`}
                            >
                                <AspectRatio
                                    ratio={1}
                                    sx={{'& > img, & > video': {}}} // Override defaults from AspectRatio in order to be able to apply objectFit="contain"    ISSUE: https://giters.com/chakra-ui/chakra-ui/issues/4347?amp=1
                                >
                                    <Img
                                        alt={image.alt}
                                        src={image.disBaseLink}
                                        objectFit="contain"
                                    />
                                </AspectRatio>
                            </ListItem>
                        )
                    })}
                </List>
            </HideOnMobile>

            {heroImage && (
                <Box {...styles.heroImageGroup}>
                    <AspectRatio
                        {...styles.heroImage}
                        ratio={4 / 5}
                        sx={{'& > img, & > video': {}}} // Override defaults from AspectRatio in order to be able to apply objectFit="contain"    ISSUE: https://giters.com/chakra-ui/chakra-ui/issues/4347?amp=1
                    >
                        <Img
                            alt={heroImage.alt}
                            src={heroImage.disBaseLink}
                            py={{base: 6, md: 0}}
                            objectFit="contain"
                        />
                    </AspectRatio>

                    <ChevronLeftIcon
                        onClick={() => {
                            selectedIndex !== 0
                                ? setSelectedIndex(selectedIndex - 1)
                                : setSelectedIndex(thumbnailImages.length - 1)
                        }}
                        {...styles.heroImageLeftSwitch}
                    ></ChevronLeftIcon>

                    <ChevronRightIcon
                        onClick={() => {
                            selectedIndex < thumbnailImages.length - 1
                                ? setSelectedIndex(selectedIndex + 1)
                                : setSelectedIndex(0)
                        }}
                        {...styles.heroImageRightSwitch}
                    ></ChevronRightIcon>
                </Box>
            )}
        </Flex>
    )
}

ImageGallery.propTypes = {
    /**
     * The images array to be rendered
     */
    imageGroups: PropTypes.array,
    /**
     * The current selected variation values
     */
    selectedVariationAttributes: PropTypes.object,
    /**
     * Size of the Image gallery, this will be used to determined the max width from styles
     */
    size: PropTypes.string
}

export default ImageGallery
