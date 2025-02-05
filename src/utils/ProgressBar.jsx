import React, { useEffect, useState } from 'react'

function ProgressBar({ totalValue = 0, ItemNumber = 0 }) {
    const [percentage, setPercentage] = useState(0);
    console.log(totalValue, "asdasd", ItemNumber)
    useEffect(() => {
        if (!totalValue && !ItemNumber) {
            setPercentage(0)
        } else {
            setPercentage(Math.round((ItemNumber / totalValue) * 100));
        }
    }), [ItemNumber, totalValue];
    return (
        <div>
            {/* Percentage completion container */}
            <h4>Profile Information</h4>
            <p>Complete profile info to unlock all features</p>
            <button className='cart-btn'>
                {percentage}%
            </button>
        </div>
    )
}

export default ProgressBar
