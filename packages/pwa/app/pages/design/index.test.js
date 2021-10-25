/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {renderWithProviders} from '../../utils/test-utils'
import DesignPage from './index'

jest.mock('../../commerce-api/einstein')

test('Desgin Page renders without errors', async () => {
    const {getByTestId} = renderWithProviders(<DesignPage />)

    expect(getByTestId('design-page')).toBeInTheDocument()
    expect(typeof DesignPage.getTemplateName()).toEqual('string')
})
