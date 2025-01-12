import React from 'react'
import loader from '../assets/loaderImage.png';
function Loader() {
    return (
        <div className='loader-section'>
            <img src={loader} alt='loader' />
        </div>
    )
}

export default Loader
