/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, List, ListItem, Link, Text, HStack, useMultiStyleConfig} from '@chakra-ui/react'
import {Link as RouteLink} from 'react-router-dom'

const LinksList = ({
    links = [],
    heading = '',
    variant,
    color,
    onLinkClick,
    headingLinkRef,
    ...otherProps
}) => {
    const styles = useMultiStyleConfig('LinksList', {variant})
    return (
        <Box {...styles.container} {...(color ? {color: color} : {})} {...otherProps}>
            {heading &&
                (heading.href ? (
                    <Link
                        as={RouteLink}
                        to={heading.href}
                        onClick={onLinkClick}
                        ref={headingLinkRef}
                        {...styles.headingLink}
                    >
                        <Text {...styles.heading} {...(heading.styles ? heading.styles : {})}>
                            {heading.text}
                        </Text>
                    </Link>
                ) : (
                    <Text {...styles.heading}>{heading}</Text>
                ))}

            {links && (
                <List spacing={0.5} {...styles.list}>
                    {variant === 'horizontal' ? (
                        <HStack spacing={0.5}>
                            {links.map((link, i) => (
                                <ListItem key={i} {...styles.listItem} sx={styles.listItemSx}>
                                    <Link
                                        as={RouteLink}
                                        to={link.href}
                                        onClick={onLinkClick}
                                        // {...(link.styles ? link.styles : {})}
                                        variant="submenu"
                                    >
                                        {link.text}
                                    </Link>
                                </ListItem>
                            ))}
                        </HStack>
                    ) : (
                        links.map((link, i) => (
                            <ListItem {...styles.listItem} key={i}>
                                <Link
                                    as={RouteLink}
                                    to={link.href}
                                    onClick={onLinkClick}
                                    // {...(link.styles ? link.styles : {})}
                                    variant="submenu"
                                >
                                    {link.text}
                                </Link>
                            </ListItem>
                        ))
                    )}
                </List>
            )}
        </Box>
    )
}

LinksList.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            text: PropTypes.string
        })
    ).isRequired,
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    variant: PropTypes.oneOf(['vertical', 'horizontal']),
    color: PropTypes.string,
    onLinkClick: PropTypes.func,
    headingLinkRef: PropTypes.object
}

export default LinksList
