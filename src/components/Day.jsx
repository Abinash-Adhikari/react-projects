import React from 'react'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Day = () => {
    return (
        <div className='day-card'>
            <div className="day-text">
                Sun
            </div>
            <div className="temp-icon">
                <FontAwesomeIcon icon={faSun} />
            </div>
            <div className="temp-text">
                20 <sup> &deg; c </sup>
            </div>
        </div>
    )
}

export default Day