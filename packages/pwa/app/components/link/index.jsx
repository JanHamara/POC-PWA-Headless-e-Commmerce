/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link as ChakraLink} from '@chakra-ui/react'
import {Link as SPALink, NavLink as NavSPALink} from 'react-router-dom'
import {useIntl} from 'react-intl'

const Link = React.forwardRef(
    ({href, to, useNavLink = false, variant = 'nodecoration', ...props}, ref) => {
        const _href = to || href
        const {locale} = useIntl()
        const localePath = `/${locale}`
        const localizedHref = _href && _href.includes(localePath) ? _href : `${localePath}${_href}`

        return (
            <ChakraLink
                as={useNavLink ? NavSPALink : SPALink}
                {...(useNavLink && {exact: true})}
                {...props}
                to={_href === '/' ? '/' : localizedHref}
                ref={ref}
                variant={variant}
            />
        )
    }
)

Link.displayName = 'Link'

Link.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    useNavLink: PropTypes.bool,
    variant: PropTypes.string
}

export default React.memo(Link)
