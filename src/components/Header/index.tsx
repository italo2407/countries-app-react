import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import Search from '../Search'
import Style from './style'

const Header = () => {
    return (
        <div id="header">
            <div className={Style.headerContainer}>
                <div className={Style.header}>
                    <Link to="/">
                        <div className={Style.logoContainer}>
                            <FontAwesomeIcon className={Style.logoIcon} icon={faGlobe}/>
                            <span className={Style.logoTitle}>Countries</span>
                        </div>
                    </Link>
                    <div className={Style.searchContainer}>
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
