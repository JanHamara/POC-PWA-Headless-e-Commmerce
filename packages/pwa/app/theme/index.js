/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import {extendTheme} from '@chakra-ui/react'

// Global Style Overrides
import styles from './styles'

// Foundational Style Overrides
import colors from './foundations/colors'
import fonts from './foundations/fonts'
import fontSizes from './foundations/fontSizes'
import sizes from './foundations/sizes'
import space from './foundations/space'
import gradients from './foundations/gradients'
import layerStyles from './foundations/layerStyles'
import textStyles from './foundations/textStyles'
import breakpoints from './foundations/breakpoints'

// Component Style Overrides - Base Components
import Alert from './components/base/alert'
import Accordion from './components/base/accordion'
import Badge from './components/base/badge'
import Button from './components/base/button'
import Checkbox from './components/base/checkbox'
import Container from './components/base/container'
import Drawer from './components/base/drawer'
import FormLabel from './components/base/formLabel'
import Icon from './components/base/icon'
import Input from './components/base/input'
import Link from './components/base/link'
import Modal from './components/base/modal'
import Radio from './components/base/radio'
import Select from './components/base/select'
import Skeleton from './components/base/skeleton'
import Tooltip from './components/base/tooltip'
import Popover from './components/base/popover'

// Component Style Overrides - Project Components
import App from './components/project/_app'
import Breadcrumb from './components/project/breadcrumb'
import Carousel from './components/project/carousel'
import Header from './components/project/header'
import ListMenu from './components/project/list-menu'
import Features from './components/project/features'
import Footer from './components/project/footer'
import CheckoutFooter from './components/project/checkout-footer'
import LinksList from './components/project/links-list'
import DrawerMenu from './components/project/drawer-menu'
import NestedAccordion from './components/project/nested-accordion'
import LocaleSelector from './components/project/locale-selector'
import OfflineBanner from './components/project/offline-banner'
import Pagination from './components/project/pagination'
import ProductTile from './components/project/product-tile'
import PromoTile from './components/project/promo-tile'
import SocialIcons from './components/project/social-icons'
import SwatchGroup from './components/project/swatch-group'
import ImageGallery from './components/project/image-gallery'

const overrides = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    styles,
    colors,
    fonts,
    fontSizes,
    letterSpacings: {
        tighter: '-0.05em',
        tight: '0em',
        normal: '0.025',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em'
    },
    sizes,
    space,
    gradients,
    layerStyles,
    textStyles,
    breakpoints,
    components: {
        // base components
        Accordion,
        Alert,
        Badge,
        Button,
        Checkbox,
        Container,
        Drawer,
        FormLabel,
        Icon,
        Link,
        Input,
        Modal,
        Popover,
        Radio,
        Select,
        Skeleton,
        Tooltip,

        // project components
        App,
        Breadcrumb,
        Carousel,
        Header,
        Features,
        Footer,
        CheckoutFooter,
        LinksList,
        ListMenu,
        DrawerMenu,
        NestedAccordion,
        LocaleSelector,
        OfflineBanner,
        SocialIcons,
        Pagination,
        ProductTile,
        PromoTile,
        SwatchGroup,
        ImageGallery
    }
}

export default extendTheme(overrides)
