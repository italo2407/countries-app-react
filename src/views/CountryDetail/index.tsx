import React, { Fragment } from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';

import { GET_COUNTRY } from '../../operations/queries';
import Style from './style'
import Loading from '../../components/common/Loading';
import PageNotFound from '../../components/PageNotFound';
import CountryInfo from '../../components/CountryInformation';


const CountryDetail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_COUNTRY, {
        variables: { 
            id: id
        }
    })

    if(loading){
        return <Loading />
    }

    if(data.Country.length == 0){
        return <PageNotFound />
    }

    return (
        <div className="pt-24">
            <div className={Style.flagContainer}>  
                <img src={data.Country[0].flag.svgFile} alt="Country Flag" />
                <h1 className={Style.countryTitle}>{data.Country[0].name}</h1>    
            </div>
            <div className={Style.tableContainer}>
                <div className="bg-white shadow-md rounded my-6">
                    <table className={Style.table}> 
                        <tbody>
                            <CountryInfo _key={'Capital'} value={data.Country[0].capital}/>
                            <CountryInfo _key={'Population'} value={data.Country[0].population.toString()}/>
                            <CountryInfo _key={'Area'} value={data.Country[0].area.toString()}/>
                            { data.Country[0].subregion && 
                                <Fragment>
                                    <CountryInfo _key={'Subregion'} value={data.Country[0].subregion.name}/>
                                    <CountryInfo _key={'Region'} value={data.Country[0].subregion.region.name}/>
                                </Fragment>
                            }
                            <CountryInfo _key={'Currencies'} value={data.Country[0].currencies}/>
                            <CountryInfo _key={'Languages'} value={data.Country[0].officialLanguages}/>
                            <CountryInfo _key={'Borders'} value={data.Country[0].borders}/>
                            <CountryInfo _key={'Timezones'} value={data.Country[0].timezones}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default CountryDetail