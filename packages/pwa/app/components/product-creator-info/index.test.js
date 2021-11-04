/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import ProductCreatorInfo from './index'
import {renderWithProviders} from '../../utils/test-utils'
import {screen} from '@testing-library/react'

// Set up and clean up
beforeEach(() => {
    jest.resetModules()
})

jest.setTimeout(60000)

const MockedComponent = () => {
    const authorMock = {
        id: 234,
        name: 'Ash',
        content: 'Lorem ipsum donor',
        linkLabel: 'Discover'
    }
    return <ProductCreatorInfo {...authorMock} />
}

test('renders product creator name, content and link', () => {
    renderWithProviders(<MockedComponent />)

    expect(screen.getByText(/Ash/i)).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum donor/i)).toBeInTheDocument()
    expect(screen.getByText(/Discover/i)).toBeInTheDocument()
})
