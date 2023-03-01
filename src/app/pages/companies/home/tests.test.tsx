import React from 'react'
import { render, screen } from '@testing-library/react'
import { CompaniesHomePage } from './companies-home.page'

test('renders page header', () => {
    render(<CompaniesHomePage />)
    const h1 = screen.getByText(/Internship 4.0 - Portal de estágios/i)
    expect(h1).toBeInTheDocument()
})
