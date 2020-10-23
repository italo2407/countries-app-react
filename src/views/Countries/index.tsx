import React, { FormEvent, Fragment } from 'react';
import { useQuery } from '@apollo/client';

import Style from './style'
import Country from '../../components/Country'
import FilterSection from '../../components/FilterSection';
import { GET_COUNTRIES } from '../../operations/queries'
import { useStateValue } from '../../context/AppContext'
import { constants } from '../../utils/Constants'
import Loading from '../../components/common/Loading';
import Container from '../../components/common/Container';

const Countries = () => {
    const { filters } = useStateValue()!;
    const { loading, data, error, fetchMore } = useQuery(GET_COUNTRIES, {
        variables: { 
            offset: 0,
            first: constants.FIRST,
            search: filters.search,
            region: filters.region,
            currency: filters.currency,
            language: filters.language
        },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: "cache-and-network"
    });

    if (!loading && !data) {
        return (
          <div>
            <div>you got query failed for some reason</div>
            <div>{error?.message}</div>
          </div>
        );
    }

    const onFetchMore = (e: FormEvent) => {
        e.preventDefault();
        fetchMore({
                variables: {
                offset: data.Country.length
            },
            updateQuery: (prev:any, { fetchMoreResult }) => {
                debugger
                if (fetchMoreResult.Country.length == 0) return null;
                return Object.assign({}, prev, {
                    Country: [...prev.Country, ...fetchMoreResult.Country]
                });
            }
        })
    }
    
    return (
        <Fragment>
            <FilterSection />
            { !data && loading ?
                ( <Loading /> ) : (
                    data.Country.length == 0 ?
                    <Container>
                        <p className="text-gray-700 text-center">{constants.noResult}</p>
                    </Container> :
                    <div className={Style.container}>
                        {data.Country.map((item, i) => <Country key={i} data={item} />)}
                    </div>
                )}
            { 
                !loading &&
                data && data.Country.length >= constants.FIRST &&
                <div className={Style.buttonContainer}>
                    <button className={Style.button} onClick={onFetchMore}> 
                        Show more countries
                    </button>
                </div>
                
            }
        </Fragment>
    )
}

export default Countries;