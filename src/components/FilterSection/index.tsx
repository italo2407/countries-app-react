import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../common/Dropdown';
import { GET_REGIONS, GET_CURRENCIES, GET_LANGUAGES  } from '../../operations/queries';
import Style from './style';
import { useQuery } from '@apollo/client';
import { useStateValue } from '../../context/AppContext';

const Filters = ({data, event}) => {
    const {filters, setFilters} = useStateValue()!;

    const setValues = (property, value) => {
        setFilters({
            ...filters,
            [property]: value
        })
    }
    const onSelectRegion = (value: string | undefined) => {
        setValues('region', value);
    }

    const onSelectLanguage = (value: string | undefined) => {
        setValues('language', value);
    }

    const onSelectCurrency = (value: string | undefined) => {
        setValues('currency', value);
    }

    return (
        <Fragment>
            <Dropdown value={filters.region} data={data.regions} onSelect={onSelectRegion} placeholder="Filter by Region"/>
            <Dropdown value={filters.language} data={data.languages} onSelect={onSelectLanguage} placeholder="Filter by Languages"/>
            <Dropdown value={filters.currency} data={data.currencies} onSelect={onSelectCurrency} placeholder="Filter by Currencies"/>
        </Fragment>
    )
} 

const FilterSection = () => {
    const [filterVisible, setFilterVisible] = useState(false);
    const { data: regionData, loading: loadingRegion } = useQuery(GET_REGIONS);
    const { data: languageData, loading: loadingLanguage } = useQuery(GET_LANGUAGES);
    const { data: currencyData, loading: loadingCurrency } = useQuery(GET_CURRENCIES);

    if(loadingRegion || loadingLanguage || loadingCurrency)
        return <></>;

    const allData = {
        regions: regionData.Region.map(item => item.name),
        languages: languageData.Language.map(item => item.name),
        currencies: currencyData.Currency.map(item => item.name)
    }

    const _onClick = () => setFilterVisible(!filterVisible)

    return (
        <div className={Style.container}>
            <div className={Style.filter}>
                <span className={Style.filterLabelAndIcon(filterVisible)} onClick={_onClick}><FontAwesomeIcon icon={faFilter}/> Filtrar</span>
            </div>
            {
                filterVisible &&
                <div className="md:hidden">
                    <Filters data={allData} event={{}}/>
                </div>
            }
            <div className={Style.filterSection}>
                    <Filters data={allData} event={{}}/>
            </div>
        </div>  
    )
}

export default FilterSection;