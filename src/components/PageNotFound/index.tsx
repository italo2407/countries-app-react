import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import Style from './style';
import { constants } from '../../utils/Constants'; 

const PageNotFound = () => {
    return (
        <div className={Style.container}>
            <div className="pb-4">
                <FontAwesomeIcon className={Style.icon} icon={faExclamationTriangle} />
                <h1 className={Style.title}>{constants.title}</h1>
                <p className={Style.message}>{constants.message}</p>
            </div>
            <Link to='/'><button className={Style.button}>Go to Home</button></Link>
        </div>
    )
}

export default PageNotFound;