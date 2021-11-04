/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {forwardRef} from 'react'
import {Icon, createIcon, useTheme} from '@chakra-ui/react'

// Our own SVG imports. These will be extracted to a single sprite sheet by the
// svg-sprite-loader webpack plugin at build time and injected in the <body> tag
// during SSR.
// NOTE: Another solution would be to use `require-context.macro` package to accomplish
// importing icon svg's.
import '../../assets/svg/alert.svg'
import '../../assets/svg/account.svg'
import '../../assets/svg/basket.svg'
import '../../assets/svg/bg-club.svg'
import '../../assets/svg/bullhorn.svg'
import '../../assets/svg/check.svg'
import '../../assets/svg/check-circle.svg'
import '../../assets/svg/chevron-up.svg'
import '../../assets/svg/chevron-down.svg'
import '../../assets/svg/chevron-right.svg'
import '../../assets/svg/chevron-left.svg'
import '../../assets/svg/chevron-right.svg'
import '../../assets/svg/chevron-up.svg'
import '../../assets/svg/filter.svg'
import '../../assets/svg/file.svg'
import '../../assets/svg/flag-ca.svg'
import '../../assets/svg/flag-us.svg'
import '../../assets/svg/flag-gb.svg'
import '../../assets/svg/flag-fr.svg'
import '../../assets/svg/flag-it.svg'
import '../../assets/svg/flag-cn.svg'
import '../../assets/svg/flag-jp.svg'
import '../../assets/svg/hamburger.svg'
import '../../assets/svg/info.svg'
import '../../assets/svg/minus.svg'
import '../../assets/svg/social-facebook.svg'
import '../../assets/svg/social-instagram.svg'
import '../../assets/svg/social-twitter.svg'
import '../../assets/svg/social-youtube.svg'
import '../../assets/svg/lock.svg'
import '../../assets/svg/payment.svg'
import '../../assets/svg/plus.svg'
import '../../assets/svg/receipt.svg'
import '../../assets/svg/search.svg'
import '../../assets/svg/signout.svg'
import '../../assets/svg/user.svg'
import '../../assets/svg/visibility.svg'
import '../../assets/svg/visibility-off.svg'
import '../../assets/svg/heart.svg'
import '../../assets/svg/heart-solid.svg'
import '../../assets/svg/close.svg'

// For non-square SVGs, we can use the symbol data from the import to set the
// proper viewBox attribute on the Icon wrapper.
import AmexSymbol from '../../assets/svg/cc-amex.svg'
import BrandLogoSymbol from '../../assets/svg/brand-logo.svg'
import CVVSymbol from '../../assets/svg/cc-cvv.svg'
import DiscoverSymbol from '../../assets/svg/cc-discover.svg'
import LocationSymbol from '../../assets/svg/location.svg'
import MastercardSymbol from '../../assets/svg/cc-mastercard.svg'
import PaypalSymbol from '../../assets/svg/paypal.svg'
import SocialPinterestSymbol from '../../assets/svg/social-pinterest.svg'
import VisaSymbol from '../../assets/svg/cc-visa.svg'

// TODO: We're hardcoding the `viewBox` for these imported SVGs temporarily as the
// SVG loader plugin is not properly providing us the symbol data on the client side.
AmexSymbol.viewBox = AmexSymbol.viewBox || '0 0 38 22'
BrandLogoSymbol.viewBox = BrandLogoSymbol.viewBox || '0 0 46 32'
CVVSymbol.viewBox = CVVSymbol.viewBox || '0 0 41 24'
DiscoverSymbol.viewBox = DiscoverSymbol.viewBox || '0 0 38 22'
LocationSymbol.viewBox = LocationSymbol.viewBox || '0 0 16 21'
MastercardSymbol.viewBox = MastercardSymbol.viewBox || '0 0 38 22'
PaypalSymbol.viewBox = PaypalSymbol.viewBox || '0 0 80 20'
SocialPinterestSymbol.viewBox = SocialPinterestSymbol.viewBox || '0 0 21 20'
VisaSymbol.viewBox = VisaSymbol.viewBox || '0 0 38 22'

/**
 * A helper for creating a Chakra-wrapped icon from our own SVG imports via sprite sheet.
 * @param {string} name - the filename of the imported svg (does not include extension)
 */
/* istanbul ignore next */
const icon = (name, passProps) => {
    const displayName = name
        .toLowerCase()
        .replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase())
        .replace(/-/g, '')
    const component = forwardRef((props, ref) => {
        const theme = useTheme()
        const {baseStyle} = theme.components.Icon
        return (
            <Icon ref={ref} {...baseStyle} {...passProps} {...props}>
                <use role="presentation" xlinkHref={`#${name}`} />
            </Icon>
        )
    })
    component.displayName = `${displayName}Icon`
    return component
}

// Export Chakra icon components that use our SVG sprite symbol internally
// For non-square SVGs, we can use the symbol data from the import to set the
// proper viewBox attribute on the Icon wrapper.
export const AmexIcon = icon('cc-amex', {viewBox: AmexSymbol.viewBox})
export const AlertIcon = icon('alert')
export const BgClub = createIcon({
    displayName: 'BgClub',
    viewBox: '204.5 71 72 25',
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: [
        <path
            key="0"
            d="M246.295,91.75c-0.4,0.848-0.906,1.441-1.517,1.781c-0.552,0.324-1.177,0.5-1.816,0.512
		c-0.589,0.006-1.165-0.17-1.651-0.5c-0.5-0.334-0.9-0.885-1.201-1.652s-0.453-1.809-0.458-3.121c-0.02-0.889,0.082-1.775,0.3-2.637
		c0.15-0.604,0.415-1.17,0.782-1.672c0.275-0.371,0.636-0.672,1.051-0.879c0.358-0.172,0.751-0.264,1.149-0.268
		c0.432-0.002,0.859,0.09,1.252,0.268c0.336,0.131,0.622,0.365,0.817,0.668c-0.263,0.061-0.499,0.201-0.679,0.4
		c-0.198,0.229-0.302,0.523-0.287,0.824c-0.017,0.32,0.125,0.629,0.379,0.824c0.254,0.193,0.565,0.297,0.886,0.289
		c0.322,0.012,0.635-0.104,0.873-0.322c0.241-0.244,0.367-0.58,0.344-0.924c0.002-0.336-0.094-0.664-0.274-0.947
		c-0.208-0.312-0.483-0.574-0.805-0.768c-0.38-0.244-0.798-0.427-1.235-0.539c-0.466-0.118-0.945-0.176-1.426-0.172
		c-0.983-0.018-1.949,0.256-2.778,0.786c-0.822,0.537-1.479,1.291-1.896,2.18c-0.47,1.008-0.702,2.107-0.678,3.219
		c0,1.219,0.226,2.27,0.678,3.152c0.408,0.836,1.041,1.541,1.827,2.037c0.772,0.477,1.666,0.725,2.574,0.713
		c0.726,0.023,1.445-0.137,2.092-0.469c0.542-0.289,1.013-0.695,1.379-1.189c0.328-0.436,0.583-0.92,0.758-1.438L246.295,91.75z"
        />,
        <path
            key="1"
            d="M250.297,92.625V77.2c-0.325,0.113-0.66,0.193-1.002,0.239c-0.437,0.054-0.876,0.081-1.316,0.08
		c-0.476,0-0.966-0.023-1.473-0.069v0.477c0.7,0,1.176,0.163,1.425,0.488c0.249,0.326,0.376,0.829,0.379,1.51v12.7
		c0,0.637-0.138,1.068-0.415,1.295c-0.276,0.227-0.74,0.34-1.389,0.34v0.479c0.269-0.016,0.681-0.035,1.235-0.059
		c0.554-0.021,1.099-0.033,1.638-0.033s0.953,0.012,1.501,0.033c0.548,0.023,0.953,0.043,1.222,0.059V94.26
		c-0.648,0-1.111-0.113-1.389-0.34C250.437,93.691,250.298,93.26,250.297,92.625z"
        />,
        <path
            key="2"
            d="M262.283,92.305V82.18c-0.36,0.109-0.73,0.188-1.104,0.234c-0.42,0.053-0.842,0.079-1.266,0.078
		c-0.45,0-0.926-0.023-1.414-0.068v0.468c0.67,0,1.124,0.161,1.369,0.48c0.245,0.32,0.365,0.814,0.365,1.482v5.416
		c0,1.129-0.289,2.084-0.866,2.865c-0.578,0.781-1.314,1.172-2.212,1.172c-0.547,0-0.942-0.119-1.186-0.357
		c-0.248-0.254-0.406-0.584-0.45-0.938c-0.063-0.42-0.093-0.846-0.091-1.271V82.18c-0.361,0.109-0.731,0.188-1.105,0.234
		c-0.42,0.053-0.843,0.079-1.266,0.078c-0.455,0-0.927-0.023-1.413-0.068v0.468c0.669,0,1.125,0.16,1.368,0.48
		s0.364,0.814,0.364,1.482v6.4c-0.01,0.592,0.043,1.182,0.159,1.762c0.085,0.436,0.291,0.838,0.593,1.16
		c0.276,0.279,0.611,0.492,0.98,0.625c0.446,0.158,0.917,0.234,1.391,0.225c0.753-0.008,1.49-0.221,2.131-0.615
		c0.693-0.408,1.229-1.096,1.608-2.063v2.633c0.357-0.125,0.729-0.207,1.104-0.246c0.42-0.045,0.843-0.068,1.266-0.066
		c0.472,0,0.941,0.021,1.412,0.066v-0.469c-0.653,0-1.104-0.16-1.351-0.479C262.424,93.469,262.295,92.975,262.283,92.305z"
        />,
        <path
            key="3"
            d="M265.557,94.996L265.557,94.996l-0.386-0.15c0.06-0.207,0.102-0.418,0.124-0.633
		c0.023-0.217,0.034-0.436,0.035-0.654V79.941c-0.002-0.662-0.124-1.159-0.365-1.476s-0.7-0.478-1.363-0.478v-0.465
		c0.482,0.044,0.957,0.066,1.41,0.066h0.033c0.41,0,0.82-0.026,1.228-0.078c0.372-0.047,0.739-0.126,1.098-0.237v8.308
		c0.257-0.631,0.666-1.189,1.19-1.625c0.818-0.679,1.849-1.051,2.912-1.051c0.029,0,0.06,0,0.09,0.001
		c0.669-0.008,1.332,0.12,1.949,0.375c0.601,0.26,1.141,0.645,1.584,1.127c0.489,0.539,0.849,1.182,1.053,1.881
		c0.247,0.861,0.365,1.754,0.351,2.648c0.005,0.617-0.062,1.232-0.198,1.834c-0.122,0.529-0.322,1.035-0.595,1.506
		c-0.493,0.863-1.229,1.561-2.116,2.008c-0.878,0.438-1.846,0.666-2.826,0.666h-0.057c-0.875-0.004-1.735-0.221-2.507-0.633
		c-0.357-0.188-0.685-0.428-0.972-0.711l-0.457,0.379l-0.601,0.5L265.557,94.996L265.557,94.996z M270.805,83.576
		c-0.791,0-1.537,0.31-2.218,0.92c-0.628,0.563-1.037,1.398-1.216,2.482v6.238c0.333,0.332,0.724,0.604,1.153,0.797
		c0.619,0.285,1.292,0.432,1.974,0.432c1.153,0,2.031-0.451,2.61-1.342s0.871-2.285,0.87-4.152c0.021-1.01-0.092-2.021-0.338-3.002
		c-0.226-0.797-0.574-1.398-1.039-1.785c-0.508-0.404-1.145-0.613-1.793-0.588H270.805L270.805,83.576z"
        />,
        <path
            key="4"
            d="M209.053,94.762H204.5V72.299h5.254c0.885,0,1.519,0.086,1.996,0.271c0.453,0.16,0.826,0.489,1.042,0.918
		c0.208,0.402,0.334,0.95,0.397,1.724c0.059,0.717,0.063,1.604,0.063,2.687c0,1.695,0,2.919-0.282,3.703
		c-0.112,0.362-0.35,0.672-0.669,0.875c-0.314,0.193-0.74,0.299-1.304,0.322v0.164h0.001c0.373,0.03,0.836,0.067,1.25,0.285
		c0.489,0.258,0.789,0.705,0.916,1.367l0.001,0.006c0.063,0.383,0.092,0.557,0.092,4.545c0.017,0.928-0.017,1.855-0.102,2.779
		c-0.09,0.771-0.255,1.316-0.521,1.713c-0.3,0.434-0.748,0.74-1.26,0.865C210.824,94.686,210.086,94.762,209.053,94.762z
		 M207.367,84.166v7.832h1.525c0.839,0,1.145-0.064,1.306-0.449c0.179-0.352,0.193-2.564,0.19-3.502c0-1.73-0.034-2.709-0.22-3.24
		c-0.189-0.541-0.535-0.641-1.151-0.641H207.367L207.367,84.166z M207.367,74.971v6.742h0.1c2.018,0,2.381,0,2.637-0.601
		c0.222-0.476,0.222-2.35,0.222-3.055c0-0.375-0.029-0.912-0.056-1.43l-0.008-0.16c-0.063-0.909-0.123-1.216-0.381-1.368
		C209.658,74.971,209.572,74.971,207.367,74.971z"
        />,
        <path
            key="5"
            d="M220.644,85.537h1.815v5.088c0,0.668,0,2.006-1.501,2.006c-1.464,0-1.464-1.242-1.464-2.701V77.019
		c0-1.114,0-2.483,1.501-2.483c1.303,0,1.366,1.021,1.366,2.292v2.501h2.735v-2.354c0-1.651,0-4.93-4.008-4.93
		c-0.953,0-2.642,0.157-3.689,1.843c-0.827,1.273-0.827,2.572-0.827,4.523v11.11c0,1.621,0,5.598,4.072,5.598
		c1.651,0,2.29-0.891,2.702-1.4l0.254,1.051h1.782V82.798h-4.738V85.537z"
        />,
        <rect key="6" x="230.724" y="71.158" width="1.062" height="24.842" />
    ]
})
export const AccountIcon = icon('account')
export const BrandLogo = icon('brand-logo', {viewBox: BrandLogoSymbol.viewBox})
export const BasketIcon = icon('basket')
export const BullhornIcon = icon('bullhorn')
export const CheckIcon = icon('check')
export const CheckCircleIcon = icon('check-circle')
export const ChevronDownIcon = icon('chevron-down')
export const ChevronLeftIcon = icon('chevron-left')
export const ChevronRightIcon = icon('chevron-right')
export const ChevronUpIcon = icon('chevron-up')
export const CVVIcon = icon('cc-cvv', {viewBox: CVVSymbol.viewBox})
export const DiscoverIcon = icon('cc-discover', {viewBox: DiscoverSymbol.viewBox})
export const FilterIcon = icon('filter')
export const FileIcon = icon('file')
export const FlagCAIcon = icon('flag-ca')
export const FlagUSIcon = icon('flag-us')
export const FlagGBIcon = icon('flag-gb')
export const FlagFRIcon = icon('flag-fr')
export const FlagITIcon = icon('flag-it')
export const FlagCNIcon = icon('flag-cn')
export const FlagJPIcon = icon('flag-jp')
export const HamburgerIcon = icon('hamburger')
export const InfoIcon = icon('info')
export const LockIcon = icon('lock')
export const LocationIcon = icon('location')
export const PaymentIcon = icon('payment')
export const PaypalIcon = icon('paypal', {viewBox: PaypalSymbol.viewBox})
export const PlusIcon = icon('plus')
export const MinusIcon = icon('minus')
export const MastercardIcon = icon('cc-mastercard', {viewBox: MastercardSymbol.viewBox})
export const ReceiptIcon = icon('receipt')
export const SearchIcon = icon('search')
export const SocialFacebookIcon = icon('social-facebook')
export const SocialInstagramIcon = icon('social-instagram')
export const SocialPinterestIcon = icon('social-pinterest', {
    viewBox: SocialPinterestSymbol.viewBox
})
export const SocialTwitterIcon = icon('social-twitter')
export const SocialYoutubeIcon = icon('social-youtube')
export const SignoutIcon = icon('signout')
export const UserIcon = icon('user')
export const VisaIcon = icon('cc-visa', {viewBox: VisaSymbol.viewBox})
export const VisibilityIcon = icon('visibility')
export const VisibilityOffIcon = icon('visibility-off')
export const HeartIcon = icon('heart')
export const HeartSolidIcon = icon('heart-solid')
export const CloseIcon = icon('close')
