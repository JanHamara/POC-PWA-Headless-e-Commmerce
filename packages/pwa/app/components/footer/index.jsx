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
    AspectRatio,
    Img,
    Box,
    Text,
    SimpleGrid,
    useMultiStyleConfig,
    StylesProvider,
    useStyles,
    Input,
    InputGroup,
    Divider,
    HStack,
    Button,
    VStack,
    Flex,
    Center,
    Image,
    useMediaQuery
} from '@chakra-ui/react'

import {useIntl} from 'react-intl'

// Mock Data
import footerServices from '../../mocks/footer'

// Components
import LinksList from '../links-list'
import SocialIcons from '../social-icons'
import {AboveXL, BelowXL, AboveLG, BelowLG, HideOnMobile} from '../responsive'
// import {SUPPORTED_LOCALES} from '../../constants'
// import {getUrlWithLocale} from '../../utils/url'
// import LocaleText from '../locale-text'

const Footer = ({...otherProps}) => {
    const styles = useMultiStyleConfig('Footer')
    // const [locale, setLocale] = useState(intl.locale)

    return (
        <Box as="footer" {...otherProps}>
            <StylesProvider value={styles}>
                {/* Footer Services */}
                <Box {...styles.container}>
                    <Box {...styles.content} my={6}>
                        <Flex {...styles.footerServices}>
                            {footerServices?.map((service, index) => (
                                <VStack
                                    {...styles.footerService}
                                    key={index}
                                    xl={{
                                        base: index == 0 || index == 1 ? 2 : 0,
                                        md: 0
                                    }}
                                    borderRight={{
                                        base: index == 0 || index == 2 ? '1px solid #bebebe' : 0,
                                        xl:
                                            footerServices.length - 1 == index
                                                ? 0
                                                : '1px solid #bebebe'
                                    }}
                                >
                                    <Center h={16} w="full">
                                        <Image
                                            alt={service.image.alt}
                                            src={getAssetUrl(`static/img/${service.image.src}.png`)}
                                        />
                                    </Center>

                                    <Text {...styles.footerServiceTitle}>{service.title}</Text>

                                    <HideOnMobile>
                                        <Text
                                            {...styles.footerServiceContent}
                                            dangerouslySetInnerHTML={{__html: service.content}}
                                        ></Text>
                                    </HideOnMobile>
                                </VStack>
                            ))}
                        </Flex>
                    </Box>
                </Box>

                {/* Footer Navigation / Newsletter / Customer Service */}
                <AboveXL>
                    <Box {...styles.container}>
                        <Box {...styles.wrapper}>
                            <Box position="relative" w="full" h="auto">
                                <Box {...styles.bgWrapper}></Box>

                                <Box {...styles.content}>
                                    <SimpleGrid gridTemplateColumns="50% 1fr 1fr">
                                        {/* 2 Columns - Footer Navigation */}
                                        <FooterNavigation></FooterNavigation>

                                        <Subscribe />

                                        <CustomerService></CustomerService>
                                    </SimpleGrid>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </AboveXL>

                <BelowXL>
                    <Box {...styles.container} backgroundColor="bg">
                        <Box {...styles.content}>
                            {/* 2 Columns - Footer Navigation */}
                            <FooterNavigation variant="mobile"></FooterNavigation>
                        </Box>
                    </Box>

                    <Box {...styles.container} backgroundColor="bg">
                        <Box {...styles.content}>
                            <Subscribe />
                        </Box>
                    </Box>

                    <Box {...styles.container} backgroundColor="white">
                        <Box {...styles.content}>
                            <CustomerService></CustomerService>
                        </Box>
                    </Box>
                </BelowXL>

                {/* Footer Copyright Statement */}
                <Box {...styles.container} {...styles.copyright}>
                    <Box {...styles.content} {...styles.copyrightWrapper}>
                        <Flex {...styles.copyrightFlex}>
                            <Text {...styles.copyrightItem}>©2021 BONGÉNIE-GRIEDER</Text>
                            <Text {...styles.copyrightItem}>
                                Authorized retailer for brands provided on the website
                            </Text>
                        </Flex>
                    </Box>
                </Box>
            </StylesProvider>
        </Box>
    )
}

const FooterNavigation = ({variant = 'default', ...otherProps}) => {
    const styles = useMultiStyleConfig('Footer')
    const intl = useIntl()

    return (
        <Box
            {...styles.footerNavGrid}
            {...otherProps}
            sx={
                variant == 'default'
                    ? {
                          columnCount: 4,
                          columnGap: '60px'
                      }
                    : {
                          columnCount: 2
                      }
            }
        >
            {/* THE GROUP */}
            <LinksList
                css={{
                    '-webkit-column-break-inside': 'avoid'
                }}
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

            {/* LATEST NEWS */}
            <LinksList
                css={{
                    '-webkit-column-break-inside': 'avoid'
                }}
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

            {/* STORES & RESTAURANTS */}
            <LinksList
                css={{
                    '-webkit-column-break-inside': 'avoid'
                }}
                heading={intl.formatMessage({
                    id: 'footer.column.stores_restaurants',
                    defaultMessage: 'Stores & Restaurants'
                })}
                links={[
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.geneva',
                            defaultMessage: 'Geneva'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.vaud',
                            defaultMessage: 'Vaud'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.zurich',
                            defaultMessage: 'Zurich'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.bern',
                            defaultMessage: 'Bern'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.basel',
                            defaultMessage: 'Basel'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.lucerne',
                            defaultMessage: 'Lucerne'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.valais',
                            defaultMessage: 'Valais'
                        })
                    }
                ]}
            />

            {/* MY ACCOUNT */}
            <LinksList
                css={{
                    '-webkit-column-break-inside': 'avoid'
                }}
                heading={intl.formatMessage({
                    id: 'footer.column.my_account',
                    defaultMessage: 'My Account'
                })}
                links={[
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.sign_in',
                            defaultMessage: 'Sign In'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.my_orders',
                            defaultMessage: 'My Orders'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.my_wishlist',
                            defaultMessage: 'My wishlish'
                        })
                    }
                ]}
            />

            {/* INFORMATION */}
            <LinksList
                css={{
                    '-webkit-column-break-inside': 'avoid'
                }}
                heading={intl.formatMessage({
                    id: 'footer.column.information',
                    defaultMessage: 'Information'
                })}
                links={[
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.shipping_and_returns',
                            defaultMessage: 'Shipping & Returns'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.store_card',
                            defaultMessage: 'Store card'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.giftcards',
                            defaultMessage: 'Giftcards'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.payment_methods',
                            defaultMessage: 'Payment Methods'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.faq',
                            defaultMessage: 'FAQ'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.contact_us',
                            defaultMessage: 'Contact Us'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.our_services',
                            defaultMessage: 'Our Services'
                        })
                    }
                ]}
            />

            {/* WORLDS */}
            <LinksList
                css={{
                    '-webkit-column-break-inside': 'avoid'
                }}
                heading={intl.formatMessage({
                    id: 'footer.column.worlds',
                    defaultMessage: 'Worlds'
                })}
                links={[
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.women',
                            defaultMessage: 'Women'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.men',
                            defaultMessage: 'Men'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.childrens',
                            defaultMessage: "Children's"
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.homeware',
                            defaultMessage: 'Homeware'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.beauty',
                            defaultMessage: 'Beauty'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.brands',
                            defaultMessage: 'Brands'
                        })
                    }
                ]}
            />

            {/* TERMS OF USE */}
            <LinksList
                css={{
                    '-webkit-column-break-inside': 'avoid'
                }}
                heading={intl.formatMessage({
                    id: 'footer.column.terms_of_use',
                    defaultMessage: 'Terms of Use'
                })}
                links={[
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.gtc',
                            defaultMessage: 'GTC'
                        })
                    },
                    {
                        href: '/',
                        text: intl.formatMessage({
                            id: 'footer.link.impressum',
                            defaultMessage: 'Impressum'
                        })
                    }
                ]}
            />
        </Box>
    )
}

const CustomerService = ({...otherProps}) => {
    const styles = useMultiStyleConfig('Footer')
    const intl = useIntl()

    return (
        <Box {...styles.customerService} {...otherProps}>
            <Text {...styles.newsletterHeading}>
                {intl.formatMessage({
                    id: 'footer.customer.heading.service',
                    defaultMessage: 'Customer Service'
                })}
            </Text>

            <Flex {...styles.customerServiceNumber}>
                <AspectRatio ratio={1 / 1} boxSize={10}>
                    <Img src={getAssetUrl(`static/img/phone.png`)}></Img>
                </AspectRatio>

                <VStack {...styles.customerServiceWrapper}>
                    <Text textStyle="baseHeadingBoldShort" fontSize="m">
                        +41(0)22 818 19 99
                    </Text>
                    <Text mt={0} textStyle="submenu" textTransform="uppercase">
                        Free Call
                    </Text>
                </VStack>
            </Flex>

            <Text mt={6} {...styles.newsletterMessage}>
                {intl.formatMessage({
                    id: 'footer.customer.service.description',
                    defaultMessage: 'Monday-Friday: 10am-6:30pm. Saturday: 10am-6pm'
                })}
            </Text>

            <AboveXL>
                <Divider my={6}></Divider>

                <Flex w="full" justifyContent="center">
                    <HStack spacing={4}>
                        <Center w="120px" h="80px" layerStyle="bordered">
                            <VStack spacing={1}>
                                <AspectRatio ratio={2 / 1} w="42px" h="32px">
                                    <Img src={getAssetUrl(`static/img/gift.png`)}></Img>
                                </AspectRatio>

                                <Text textStyle="submenu">
                                    {intl.formatMessage({
                                        id: 'footer.customer.service.bg_gift_card',
                                        defaultMessage: 'BG gif card'
                                    })}
                                </Text>
                            </VStack>
                        </Center>
                        <Center w="120px" h="80px" layerStyle="bordered">
                            <VStack spacing={1}>
                                <AspectRatio ratio={2 / 1} w="42px" h="32px">
                                    <Img src={getAssetUrl(`static/img/card.png`)}></Img>
                                </AspectRatio>

                                <Text textStyle="submenu">
                                    {intl.formatMessage({
                                        id: 'footer.customer.service.bg_club_cards',
                                        defaultMessage: 'BG CLUB Cards'
                                    })}
                                </Text>
                            </VStack>
                        </Center>
                    </HStack>
                </Flex>
            </AboveXL>
        </Box>
    )
}

const Subscribe = ({...otherProps}) => {
    const styles = useStyles()
    const [isDesktop] = useMediaQuery('(min-width: 768px)')
    const intl = useIntl()

    return (
        <Box {...styles.newsletter} {...otherProps}>
            <Text {...styles.newsletterHeading}>
                {intl.formatMessage({
                    id: 'footer.subscribe.heading.newsletter',
                    defaultMessage: 'Newsletter'
                })}
            </Text>
            <Text {...styles.newsletterMessage}>
                {intl.formatMessage({
                    id: 'footer.subscribe.description.be_the_first',
                    defaultMessage:
                        'Be the first to know about our latest arrivals and special promotions'
                })}
            </Text>

            <Box w="full">
                <InputGroup flexDirection="column">
                    <Input
                        type="email"
                        placeholder="Your email address"
                        w="full"
                        maxW={{base: 'full', md: '380px'}}
                        mb={3}
                        mt={{base: 4, lg: 0}}
                        focusBorderColor="black"
                        variant="footer"
                    />
                    <AboveLG>
                        <Button variant="footer">
                            {intl.formatMessage({
                                id: 'footer.subscribe.button.sign_up_for_newsletter',
                                defaultMessage: 'Sign up for the newsletter'
                            })}
                        </Button>
                    </AboveLG>
                    <BelowLG>
                        <Button variant="solid" fontWeight="semibold">
                            {intl.formatMessage({
                                id: 'footer.subscribe.button.sign_up_for_newsletter',
                                defaultMessage: 'Sign up for the newsletter'
                            })}
                        </Button>
                    </BelowLG>
                </InputGroup>
            </Box>

            <Text {...styles.newsletterSubheading}>
                {intl.formatMessage({
                    id: 'footer.subscribe.subheading.follow_us',
                    defaultMessage: 'Follow Us!'
                })}
            </Text>

            <SocialIcons variant={isDesktop ? 'flex-start' : 'flex'} />
        </Box>
    )
}

// const LegalLinks = ({variant}) => {
//     const intl = useIntl()
//     return (
//         <LinksList
//             links={[
//                 {
//                     href: '/',
//                     text: intl.formatMessage({
//                         id: 'footer.link.terms_conditions',
//                         defaultMessage: 'Terms & Conditions'
//                     })
//                 },
//                 {
//                     href: '/',
//                     text: intl.formatMessage({
//                         id: 'footer.link.privacy_policy',
//                         defaultMessage: 'Privacy Policy'
//                     })
//                 },
//                 {
//                     href: '/',
//                     text: intl.formatMessage({
//                         id: 'footer.link.site_map',
//                         defaultMessage: 'Site Map'
//                     })
//                 }
//             ]}
//             color="gray.200"
//             variant={variant}
//         />
//     )
// }

// LegalLinks.propTypes = {
//     variant: PropTypes.oneOf(['vertical', 'horizontal'])
// }

FooterNavigation.propTypes = {
    variant: PropTypes.oneOf(['default', 'mobile'])
}

export default Footer
