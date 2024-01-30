import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    const icons = {
        'cloud': faCloud,
        'sun': faSun
    }

    return (
        <div className='temperature-display'>
            <div className="td-left px-3 pt-2">
                <div className="tdl-icon">
                    <FontAwesomeIcon icon={icons.sun} />
                </div>
                <div className="tdl-num ms-3">20<sup>&deg;c</sup> </div>
            </div>
            <div className="td-right px-3 pt-2">
                <h3 className='tdr-header'>Weather</h3>
                <p className='tdr-day'>Sunday</p>
                <p className='tdr-temp'>Partialy Cloud</p>
            </div>
        </div>
    )
}

export default Banner