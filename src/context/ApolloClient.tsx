import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { constants } from '../utils/Constants'

const client = new ApolloClient({
    uri: constants.COUNTRIES_URI,
    cache: new InMemoryCache()
});

const _ApolloProvider = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            { children }
        </ApolloProvider>
    )
}

export default _ApolloProvider;