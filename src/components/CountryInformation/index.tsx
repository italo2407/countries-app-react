import React from 'react';
import Style from './style';

type CountryInfoPropsType = {
    _key: string
    value: string | Array<Object>
}
const CountryInfo: React.FC<CountryInfoPropsType> = ({_key, value}) => {
    return (
        <tr className={Style.row}>
            <td className={`${Style.cell} font-semibold`}>{_key}</td>
            {typeof value === 'string' ? 
                <td className={Style.cell}>{value}</td> : 
                <td className={Style.cell}>
                    <ul>
                        { value.map((item,i) => <li key={i}>{item['name']}</li>)}
                    </ul>
                </td>
            }
        </tr>
    )
}

export default CountryInfo;