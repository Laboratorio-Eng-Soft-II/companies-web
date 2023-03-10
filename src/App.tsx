import React from 'react'
import './App.css'
import { CompaniesRoutes } from './app/routes/companies/companies-routes.routes'
import { AppContainer, GlobalStyled } from './app-styles'

function App() {
    return (
        <>
            <GlobalStyled />
            <AppContainer>
                <CompaniesRoutes />
            </AppContainer>
        </>
    )
}

export default App
