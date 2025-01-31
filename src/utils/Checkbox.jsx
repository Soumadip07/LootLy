import React, { useState } from 'react'

function Checkbox(
    {
        checkboxItems = [],
        type,
        id,
        name,
        value
    }
) {

    const [checked, setChecked] = useState(false);
    const onInputClick = (e) => {
        if (e.target.tagName !== "SPAN") {
            setChecked((prev) => !prev);
        }
    };
    console.log(checked)
    return (
        <div className='pt-2' >
            <div className="checkbox-container" onClick={onInputClick}>
                {checkboxItems && checkboxItems?.map((status) => (
                    <div key={status} className="form-check form-check-inline">
                        <input
                            type={type}
                            id={id}
                            name={name}
                            value={value}
                            className="visually-hidden"
                        />
                        <label htmlFor={status} className="ps-2">
                            <span className="material-icons">{type}</span>

                            {status}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Checkbox
