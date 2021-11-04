/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

import {
    Box,
    Text,
    Divider,
    SimpleGrid,
    useMultiStyleConfig,
    StylesProvider,
    Select,
    useStyles,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    VStack,
    Flex,
    FormControl,
    Center,
    Image
} from '@chakra-ui/react'

import {useIntl} from 'react-intl'

import footerServices from '../../mocks/footer'

import LinksList from '../links-list'
import SocialIcons from '../social-icons'
import {HideOnDesktop, HideOnMobile} from '../responsive'
import {SUPPORTED_LOCALES} from '../../constants'
import {getUrlWithLocale} from '../../utils/url'
import LocaleText from '../locale-text'

const Footer = ({...otherProps}) => {
    const styles = useMultiStyleConfig('Footer')
    const intl = useIntl()
    const [locale, setLocale] = useState(intl.locale)

    return (
        <Box as="footer" {...otherProps}>
            <StylesProvider value={styles}>
                <Box {...styles.container}>
                    <Box {...styles.content} my={6}>
                        <Flex>
                            {footerServices?.map((service, index) => (
                                <VStack
                                    {...styles.service}
                                    spacing={1}
                                    key={index}
                                    borderRight={
                                        footerServices.length - 1 == index ? 0 : '1px solid #bebebe'
                                    }
                                >
                                    <Center h={16} w="full">
                                        <Image
                                            {...styles.image}
                                            alt={service.image.alt}
                                            src={getAssetUrl(`static/img/${service.image.src}.png`)}
                                        />
                                    </Center>

                                    <Text textStyle="baseHeadingBoldShort" fontSize="md">
                                        {service.title}
                                    </Text>

                                    <Text
                                        textAlign="center"
                                        textStyle="secondaryRegular"
                                        fontSize="3xs"
                                        fontStyle="italic"
                                        maxW="60%"
                                        dangerouslySetInnerHTML={{__html: service.content}}
                                    ></Text>
                                </VStack>
                            ))}
                        </Flex>
                    </Box>
                </Box>

                <Box {...styles.container}>
                    <Box {...styles.wrapper}>
                        <Box position="relative" w="full" h="auto">
                            <Box {...styles.bgWrapper}></Box>

                            <Box {...styles.content}>
                                <HideOnMobile>
                                    <SimpleGrid gridTemplateColumns="50% 1fr 1fr" spacing={3}>
                                        <Box {...styles.listgrid}>
                                            <LinksList
                                                heading={intl.formatMessage({
                                                    id: 'footer.column.the_group',
                                                    defaultMessage: 'The Group'
                                                })}
                                                links={[
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.history',
                                                            defaultMessage: 'History'
                                                        })
                                                    },
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.press',
                                                            defaultMessage: 'Press'
                                                        })
                                                    },
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.partners',
                                                            defaultMessage: 'Partners'
                                                        })
                                                    },
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.carreers',
                                                            defaultMessage: 'Carreers'
                                                        })
                                                    }
                                                ]}
                                            />
                                            <LinksList
                                                heading={intl.formatMessage({
                                                    id: 'footer.column.latest_news',
                                                    defaultMessage: 'Latest News'
                                                })}
                                                links={[
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.in_the_mood_magazine',
                                                            defaultMessage: 'IN THE MOOD Magazine'
                                                        })
                                                    },
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.bc_insights',
                                                            defaultMessage: 'BC Insights'
                                                        })
                                                    },
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.bc_live_shopping',
                                                            defaultMessage: 'BC Live Shopping'
                                                        })
                                                    }
                                                ]}
                                            />
                                            {/* <LinksList
                                                heading={intl.formatMessage({
                                                    id: 'footer.column.our_company',
                                                    defaultMessage: 'Our Company'
                                                })}
                                                links={[
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.store_locator',
                                                            defaultMessage: 'Store Locator'
                                                        })
                                                    },
                                                    {
                                                        href: '/',
                                                        text: intl.formatMessage({
                                                            id: 'footer.link.about_us',
                                                            defaultMessage: 'About Us'
                                                        })
                                                    }
                                                ]}
                                            /> */}
                                        </Box>

                                        <Box>
                                            {/* <Subscribe /> */}
                                            [Placeholder]
                                        </Box>

                                        <Box>
                                            {/* <Subscribe /> */}
                                            [Placeholder]
                                        </Box>
                                    </SimpleGrid>
                                </HideOnMobile>

                                {/* <HideOnDesktop>
                            <Subscribe />
                        </HideOnDesktop>

                        <Box {...styles.localeSelector}>
                            <FormControl
                                data-testid="sf-footer-locale-selector"
                                id="locale_selector"
                                width="auto"
                                {...otherProps}
                            >
                                <Select
                                    value={locale}
                                    onChange={({target}) => {
                                        setLocale(target.value)

                                        // Update the `locale` in the URL.
                                        const newUrl = getUrlWithLocale(target.value, {
                                            disallowParams: ['refine']
                                        })

                                        window.location = newUrl
                                    }}
                                    variant="filled"
                                    {...styles.localeDropdown}
                                >
                                    {SUPPORTED_LOCALES.map((locale) => (
                                        <LocaleText
                                            as="option"
                                            value={locale.id}
                                            shortCode={locale.id}
                                            key={locale.id}
                                        />
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <Divider {...styles.horizontalRule} />

                        <Box {...styles.bottomHalf}>
                            <Text {...styles.copyright}>
                                &copy;{' '}
                                {intl.formatMessage({
                                    id: 'footer.message.copyright',
                                    defaultMessage:
                                        '2021 Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.'
                                })}
                            </Text>

                            <HideOnDesktop>
                                <LegalLinks variant="vertical" />
                            </HideOnDesktop>
                            <HideOnMobile>
                                <LegalLinks variant="horizontal" />
                            </HideOnMobile>
                        </Box> */}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </StylesProvider>
        </Box>
    )
}

export default Footer

const Subscribe = ({...otherProps}) => {
    const styles = useStyles()
    const intl = useIntl()

    return (
        <Box {...styles.subscribe} {...otherProps}>
            <Heading {...styles.subscribeHeading}>
                {intl.formatMessage({
                    id: 'footer.subscribe.heading.first_to_know',
                    defaultMessage: 'Be the first to know'
                })}
            </Heading>
            <Text {...styles.subscribeMessage}>
                {intl.formatMessage({
                    id: 'footer.subscribe.description.sign_up',
                    defaultMessage: 'Sign up to stay in the loop about the hottest deals'
                })}
            </Text>

            <Box>
                <InputGroup>
                    <Input type="email" placeholder="you@email.com" {...styles.subscribeField} />
                    <InputRightElement {...styles.subscribeButtonContainer}>
                        <Button variant="footer">
                            {intl.formatMessage({
                                id: 'footer.subscribe.button.sign_up',
                                defaultMessage: 'Sign Up'
                            })}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>

            <SocialIcons variant="flex-start" pinterestInnerColor="black" {...styles.socialIcons} />
        </Box>
    )
}

const LegalLinks = ({variant}) => {
    const intl = useIntl()
    return (
        <LinksList
            links={[
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.terms_conditions',
                        defaultMessage: 'Terms & Conditions'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.privacy_policy',
                        defaultMessage: 'Privacy Policy'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.site_map',
                        defaultMessage: 'Site Map'
                    })
                }
            ]}
            color="gray.200"
            variant={variant}
        />
    )
}
LegalLinks.propTypes = {
    variant: PropTypes.oneOf(['vertical', 'horizontal'])
}
