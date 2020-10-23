import React, { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Style from './style'
import { useStateValue } from '../../context/AppContext'

const Search = () => {
    const [value, setValue] = useState('');
    const {filters, setFilters} = useStateValue()!;

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            setFilters({
                ...filters,
                search: value
            })
        }
    }

    return (
        <div className="relative">
            <span className={Style.searchIconContainer}>
                <FontAwesomeIcon className={Style.searchIcon} icon={faSearch} />
            </span>
            <input type="text" className={Style.searchInput} onChange={onChange} onKeyDown={handleKeyDown} value={value}/>
        </div>
    )
}

export default Search;