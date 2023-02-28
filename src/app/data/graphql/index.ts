import { ApolloClient, InMemoryCache } from '@apollo/client'

export const api = new ApolloClient({
    uri: '',
    cache: new InMemoryCache(),
})
