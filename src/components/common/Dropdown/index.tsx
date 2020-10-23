import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Style from './style';

type DropdownProsType = {
    value: string | undefined
    data: Array<string>
    placeholder?: string
    onSelect: (value: string | undefined) => void
}

const Dropdown: React.FC<DropdownProsType> = ({value, data, placeholder, onSelect})=> {
    const [display, setDisplay] = useState(false)

    const toggleFunc = () => {
        setDisplay(!display);
    }
    const _onClick = () => {
        toggleFunc();
    }

    const _onBlur = () => {
        toggleFunc();
    }

    const _onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        const { value: currentValue } = (e.target as HTMLDivElement).dataset!;
        toggleFunc();
        onSelect(currentValue);
    }

    return (
        <div>
            <div className="relative py-1 md:mr-4">
                <input 
                    className={Style.selectHeader} 
                    type="search" 
                    autoComplete="off" 
                    readOnly 
                    role="combobox" 
                    value={value} 
                    placeholder={placeholder} 
                    onClick={_onClick}
                />
                <span className={Style.arrowIconContainer} onClick={_onClick}>
                    <FontAwesomeIcon className={Style.arrowIcon} icon={faChevronDown} />
                </span>
            </div>
            {display && 
                <div className="relative">
                    <div className={Style.optionContainer} onBlur={_onBlur}>
                        <div className={Style.option} key={-1} data-value={''} onClick={_onSelect}>All</div>
                        { data.map(
                            (item, i) => <div className={Style.option} key={i} data-value={item} onClick={_onSelect}>
                                                {item}
                                        </div>) 
                        }
                    </div>
                </div>
            }
        </div>
        
    )
}

export default Dropdown