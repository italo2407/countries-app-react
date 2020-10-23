import React from 'react';
import Style from './style';
import { Link } from "react-router-dom";

const Country = ({ data }: any) => {
    const region = (data.subregion && 
                    data.subregion.region && 
                    typeof data.subregion.region !== 'undefined') ? data.subregion.region.name : '';

    return (
        <Link to={`/country/${data._id}`} >
            <div className={Style.countryContainer}>
                <img className={Style.countryFlag} src={data.flag.svgFile} alt="Country Flag" />
                <div className={Style.countrySection}>
                    <h2 className="font-bold text-base">{data.name}</h2>
                    <p><span className="font-bold">Population:</span>{data.population}</p>
                    { region && <p><span className="font-bold">Region:</span>{region}</p> }
                    <p><span className="font-bold">Capital:</span>{data.capital}</p>
                </div>
            </div>
        </Link>
        
    )
}

export default Country;