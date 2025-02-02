import React, { useState } from 'react';

function Checkbox({ checkboxItems, type, selectedCheckboxValue, setSelectedCheckboxValue }) {


    const onInputClick = (e, index) => {
        setSelectedCheckboxValue(e.target.value);
    };
    return (
        <div className='pt-2'>
            <div className="checkbox-container">
                {checkboxItems.map((value, index) => (
                    <div key={index} className="form-check form-check-inline ">
                        <input
                            type={type}
                            value={value}
                            id={`radio-${index}`}
                            checked={selectedCheckboxValue === value}
                            onChange={(e) => onInputClick(e, index)}
                            className="visually-hidden"
                        />
                        <label htmlFor={`radio-${index}`} className='d-flex justify-content-center align-items-center gap-1'>
                            <span className={`material-icons ${selectedCheckboxValue === value ? 'selected' : ''}`}>
                                {selectedCheckboxValue === value
                                    ? type === 'checkbox'
                                        ? 'check_box'
                                        : 'radio_button_checked'
                                    : type === 'checkbox'
                                        ? 'check_box_outline_blank'
                                        : 'radio_button_unchecked'}
                            </span>
                            {value}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Checkbox;
