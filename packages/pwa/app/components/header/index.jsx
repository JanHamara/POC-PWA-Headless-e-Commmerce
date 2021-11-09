/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {useIntl} from 'react-intl'
import {
    useMultiStyleConfig,
    Box,
    Flex,
    IconButton,
    Image,
    Badge,
    Img,
    Button,
    Popover,
    PopoverHeader,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Spacer,
    Stack,
    HStack,
    Text,
    Divider,
    useDisclosure,
    useMediaQuery,
    useColorMode,
    useColorModeValue,
    AspectRatio
} from '@chakra-ui/react'

import useBasket from '../../commerce-api/hooks/useBasket'
import useCustomer from '../../commerce-api/hooks/useCustomer'

import Link from '../link'
import Search from '../search'
import withRegistration from '../../hoc/with-registration'
import {
    AccountIcon,
    BgClub,
    BasketIcon,
    ChevronDownIcon,
    HeartIcon,
    SignoutIcon,
    HamburgerIcon
} from '../icons'

import {AboveLG, BelowLG} from '../responsive'

import {noop} from '../../utils/utils'
import {navLinks, messages} from '../../pages/account/constant'
import useNavigation from '../../hooks/use-navigation'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import LoadingSpinner from '../loading-spinner'
import LocaleSelector from '../locale-selector'

const ENTER_KEY = 'Enter'

const IconButtonWithRegistration = withRegistration(IconButton)
/**
 * The header is the main source for accessing
 * navigation, search, basket, and other
 * important information and actions. It persists
 * on the top of your application and will
 * respond to changes in device size.
 *
 * To customize the styles, update the themes
 * in theme/components/project/header.js
 * @param  props
 * @param   {func} props.onMenuClick click event handler for menu button
 * @param   {func} props.onLogoClick click event handler for menu button
 * @param   {object} props.searchInputRef reference of the search input
 * @param   {func} props.onMyAccountClick click event handler for my account button
 * @param   {func} props.onMyCartClick click event handler for my cart button
 * @return  {React.ReactElement} - Header component
 */
const Header = ({
    children,
    onMenuClick = noop,
    onMyAccountClick = noop,
    onLogoClick = noop,
    onMyCartClick = noop,
    onWishlistClick = noop,
    ...props
}) => {
    const intl = useIntl()
    const basket = useBasket()
    const customer = useCustomer()
    const navigate = useNavigation()

    const {colorMode, toggleColorMode} = useColorMode()

    // Color Modes
    const topBarBg = useColorModeValue('bg', 'gray.800')
    const mainBarBg = useColorModeValue('white', 'gray.900')

    const {isOpen, onClose, onOpen} = useDisclosure()
    const [isDesktop] = useMediaQuery('(min-width: 992px)')

    const [showLoading, setShowLoading] = useState(false)
    // tracking if users enter the popover Content,
    // so we can decide whether to close the menu when users leave account icons
    const hasEnterPopoverContent = useRef()

    const styles = useMultiStyleConfig('Header')

    const onSignoutClick = async () => {
        setShowLoading(true)
        await customer.logout()
        navigate('/login')
        setShowLoading(false)
    }

    const keyMap = {
        Escape: () => onClose(),
        Enter: () => onOpen()
    }

    const handleIconsMouseLeave = () => {
        // don't close the menu if users enter the popover content
        setTimeout(() => {
            if (!hasEnterPopoverContent.current) onClose()
        }, 100)
    }

    return (
        <Flex direction="vertical" wrap="wrap">
            {/* -------------------- */}
            {/* Navigation - Top Bar */}
            {/* -------------------- */}
            <Box {...styles.container} minW="full" bg={topBarBg} {...props}>
                <Flex {...styles.topbar}>
                    <Text fontSize={{base: '4xs', md: '2xs'}} lineHeight="shorter">
                        Looking for gift ideas? Find the most desirable presents for your love dones
                        in our Christmas shop.
                    </Text>

                    <AboveLG>
                        <Spacer />

                        <Stack direction="row" spacing="40px" ml="40px">
                            <Link {...styles.topBarLink}>Outlet</Link>
                            <Link {...styles.topBarLink}>Hofstetter</Link>
                            <Link {...styles.topBarLink} onClick={toggleColorMode}>
                                Our Stores
                            </Link>
                        </Stack>
                    </AboveLG>
                </Flex>
            </Box>

            {/* -------------------- */}
            {/* Navigation - Main Bar */}
            {/* -------------------- */}
            <Box {...styles.container} minW="full" bg={mainBarBg} {...props}>
                <Box {...styles.mainbar}>
                    {showLoading && <LoadingSpinner wrapperStyles={{height: '100vh'}} />}
                    <AboveLG fw={true}>
                        <Flex {...styles.mainbarWrapper}>
                            {/* ------------------------ */}
                            {/* ---- DESKTOP ---- */}
                            {/* ------------------------ */}
                            <HStack spacing={4} {...styles.languageSelector}>
                                <Link href="/fr-FR/design" {...styles.langSelectorItem}>
                                    FR
                                </Link>
                                <Link
                                    href="/en-GB/design"
                                    {...styles.langSelectorItem}
                                    color="gray.900"
                                >
                                    EN
                                </Link>
                                <Link href="/en-GB/design" {...styles.langSelectorItem}>
                                    DE
                                </Link>
                                {/* <LocaleSelector></LocaleSelector> */}
                            </HStack>

                            <Box {...styles.searchContainer}>
                                <Search
                                    placeholder={intl.formatMessage({
                                        id: 'header.search.field.value.placeholder',
                                        defaultMessage: 'Search...'
                                    })}
                                />
                            </Box>

                            <Spacer />

                            <AspectRatio maxW="145px" w="full" h="65px" ratio={16 / 9}>
                                <Link href="/">
                                    <Image
                                        src="https://res.cloudinary.com/qlik-tour-geneve/image/upload/v1635174241/temp/logo_tumkaa.png"
                                        alt="Site Logo"
                                        objectFit="cover"
                                    />
                                </Link>
                            </AspectRatio>

                            <Spacer></Spacer>

                            <HStack {...styles.iconContainer} spacing={4}>
                                <Link href="/" {...styles.bgclub}>
                                    <BgClub
                                        w="72px"
                                        h="25px"
                                        fill="gray.500"
                                        _hover={{fill: 'gray.900'}}
                                    />
                                </Link>

                                <Flex boxSize={6} justifyContent="center" alignItems="center">
                                    <AccountIcon
                                        {...styles.accountIcon}
                                        tabIndex={0}
                                        onMouseOver={isDesktop ? onOpen : noop}
                                        onKeyDown={(e) => {
                                            e.key === ENTER_KEY ? onMyAccountClick() : noop
                                        }}
                                        onClick={onMyAccountClick}
                                        aria-label={intl.formatMessage({
                                            id: 'header.button.assistive_msg.my_account',
                                            defaultMessage: 'My account'
                                        })}
                                    />
                                </Flex>

                                {customer.isRegistered && (
                                    <Popover
                                        isLazy
                                        arrowSize={15}
                                        isOpen={isOpen}
                                        placement="bottom-end"
                                        onClose={onClose}
                                        onOpen={onOpen}
                                    >
                                        <PopoverTrigger>
                                            <ChevronDownIcon
                                                aria-label="My account trigger"
                                                onMouseLeave={handleIconsMouseLeave}
                                                onKeyDown={(e) => {
                                                    keyMap[e.key]?.(e)
                                                }}
                                                {...styles.arrowDown}
                                                onMouseOver={onOpen}
                                                tabIndex={0}
                                            />
                                        </PopoverTrigger>

                                        <PopoverContent
                                            {...styles.popoverContent}
                                            onMouseLeave={() => {
                                                hasEnterPopoverContent.current = false
                                                onClose()
                                            }}
                                            onMouseOver={() => {
                                                hasEnterPopoverContent.current = true
                                            }}
                                        >
                                            <PopoverArrow />
                                            <PopoverHeader>
                                                <Text>
                                                    {intl.formatMessage({
                                                        defaultMessage: 'My Account'
                                                    })}
                                                </Text>
                                            </PopoverHeader>
                                            <PopoverBody>
                                                <Stack
                                                    spacing={0}
                                                    as="nav"
                                                    data-testid="account-detail-nav"
                                                >
                                                    {navLinks.map((link) => {
                                                        const LinkIcon = link.icon
                                                        return (
                                                            <Button
                                                                key={link.name}
                                                                as={Link}
                                                                to={`/account${link.path}`}
                                                                useNavLink={true}
                                                                variant="menu-link"
                                                                leftIcon={<LinkIcon boxSize={5} />}
                                                            >
                                                                {intl.formatMessage(
                                                                    messages[link.name]
                                                                )}
                                                            </Button>
                                                        )
                                                    })}
                                                </Stack>
                                            </PopoverBody>
                                            <PopoverFooter
                                                onClick={onSignoutClick}
                                                cursor="pointer"
                                            >
                                                <Divider colorScheme="gray" />
                                                <Button variant="unstyled" {...styles.signout}>
                                                    <Flex>
                                                        <SignoutIcon
                                                            boxSize={5}
                                                            {...styles.signoutIcon}
                                                        />
                                                        <Text as="span" {...styles.signoutText}>
                                                            {intl.formatMessage({
                                                                defaultMessage: 'Log out'
                                                            })}
                                                        </Text>
                                                    </Flex>
                                                </Button>
                                            </PopoverFooter>
                                        </PopoverContent>
                                    </Popover>
                                )}
                                <IconButtonWithRegistration
                                    aria-label={intl.formatMessage({
                                        defaultMessage: 'Wishlist'
                                    })}
                                    icon={<HeartIcon boxSize={6} />}
                                    variant="unstyled"
                                    {...styles.icons}
                                    onClick={onWishlistClick}
                                />
                                <IconButton
                                    aria-label={intl.formatMessage({
                                        id: 'header.button.assistive_msg.my_cart',
                                        defaultMessage: 'My cart'
                                    })}
                                    icon={
                                        <>
                                            <BasketIcon boxSize={6} />
                                            {/* {basket?.loaded && (
                                                <Badge variant="notification" boxSize={6}>
                                                    {basket.itemAccumulatedCount}
                                                </Badge>
                                            )} */}
                                        </>
                                    }
                                    variant="unstyled"
                                    {...styles.icons}
                                    // onClick={onMyCartClick}
                                    onClick={toggleColorMode}
                                />
                            </HStack>
                        </Flex>
                    </AboveLG>
                    {/* ------------------------ */}
                    {/* ---- END OF DESKTOP ---- */}
                    {/* ------------------------ */}

                    {/* ------------------------ */}
                    {/* -------- MOBILE -------- */}
                    {/* ------------------------ */}
                    <BelowLG fw={true} display="flex" alignItems="center">
                        <Flex {...styles.mainbarWrapper}>
                            <HStack spacing={4}>
                                <IconButton
                                    aria-label={intl.formatMessage({
                                        id: 'header.button.assistive_msg.menu',
                                        defaultMessage: 'Menu'
                                    })}
                                    icon={<HamburgerIcon boxSize={6} />}
                                    variant="unstyled"
                                    transform="scale(1.3)"
                                    onClick={onMenuClick}
                                />

                                <AspectRatio w="144px" h="24px" ratio={6 / 1}>
                                    <Img
                                        src={getAssetUrl('static/img/mobile_logo.png')}
                                        alt="Bongenie-Mobile-Logo"
                                    ></Img>
                                </AspectRatio>
                            </HStack>

                            <HStack spacing={3}>
                                <Link href="/about">
                                    <AspectRatio w="22px" h="24px">
                                        <Img
                                            src={getAssetUrl('static/img/bgclub_mobile.png')}
                                            alt="Bongenie-Mobile-Search-Icon"
                                        ></Img>
                                    </AspectRatio>
                                </Link>

                                <Box _hover={{cursor: 'pointer'}}>
                                    <AspectRatio w="24px" h="24px" ratio={1 / 1}>
                                        <Img
                                            src={getAssetUrl('static/img/search.png')}
                                            alt="Bongenie-Mobile-Search-Icon"
                                        ></Img>
                                    </AspectRatio>
                                </Box>

                                <Box _hover={{cursor: 'pointer'}}>
                                    <AspectRatio w="24px" h="24px" ratio={1 / 1}>
                                        <Img
                                            src={getAssetUrl('static/img/cart.png')}
                                            alt="Bongenie-Mobile-Cart-Icon"
                                        ></Img>
                                    </AspectRatio>
                                </Box>
                            </HStack>
                        </Flex>
                    </BelowLG>
                </Box>
            </Box>

            {/* -------------------- */}
            {/* Navigation - Navigation List Bar */}
            {/* -------------------- */}
            <AboveLG fw={true}>
                <Box {...styles.containerBordered} minW="full" bg={mainBarBg} {...props}>
                    <Box {...styles.secondarybar}>
                        <Flex
                            wrap="wrap"
                            alignItems={['baseline', 'baseline', 'baseline', 'center']}
                            justifyContent="center"
                        >
                            {children}
                        </Flex>
                    </Box>
                </Box>
            </AboveLG>
        </Flex>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    onMenuClick: PropTypes.func,
    onLogoClick: PropTypes.func,
    onMyAccountClick: PropTypes.func,
    onWishlistClick: PropTypes.func,
    onMyCartClick: PropTypes.func,
    searchInputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({current: PropTypes.elementType})
    ])
}

export default Header
