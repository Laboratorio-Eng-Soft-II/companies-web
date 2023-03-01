import React from 'react'
import './App.css'
import { ApolloProvider } from '@apollo/client'
import { api } from './app/data/graphql'
import { CompaniesRoutes } from './app/routes/companies/companies-routes.routes'
import { AppContainer, GlobalStyled } from './app-styles'

function App() {
    return (
        <ApolloProvider client={api}>
            <GlobalStyled />
            <AppContainer>
                <CompaniesRoutes />
            </AppContainer>
        </ApolloProvider>
    )
}

export default App
