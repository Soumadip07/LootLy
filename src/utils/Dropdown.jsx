import React, { useState, useEffect, useRef } from "react";

function Dropdown({
    options = [],
    placeholder = "Type to search...",
    onChange,
    selectedOption,
    keyTitle,
    idTitle
}) {
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [open, setOpen] = useState(false);
    const [hasError, setHasError] = useState(false);

    const dropdownRef = useRef(null);
    useEffect(() => {
        if (options && !Array.isArray(options)) {
            setFilteredOptions([]);
        } else {
            setFilteredOptions(options);
        }
    }, [options]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 🔹 Handle search input change
    const onInputChange = (e) => {
        const searchValue = e.target.value;
        setInputValue(searchValue);

        if (!Array.isArray(options)) return;

        // 🔹 Filter options based on search term
        const filtered = options.filter((opt) =>
            (keyTitle && opt[keyTitle] ? opt[keyTitle] : opt).toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredOptions(filtered);

    };

    const onItemSelected = (opt) => {
        if (!Array.isArray(options)) return;

        setInputValue((keyTitle && opt[keyTitle] ? opt[keyTitle] : opt));
        onChange((keyTitle && opt[keyTitle] ? opt[keyTitle] : opt));
        setOpen(false); // Close dropdown
    };

    // 🔹 Clear input value
    const clearDropdown = (e) => {
        e.stopPropagation();
        setInputValue("");
        onChange("");
    };

    const onInputClick = (e) => {
        if (!Array.isArray(options)) return;
        if (e.target.tagName !== "SPAN") {
            setOpen((prev) => !prev);
        }
    };


    // console.log(filteredOptions, "key", keyTitle, "sad", idTitle, "optuiojns", options)
    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="input-container" onClick={onInputClick}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={onInputChange}
                />
                {!inputValue && (
                    <div className="input-arrow-container">
                        <span className="material-symbols-outlined">
                            {open ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                        </span>
                    </div>
                )}
                {inputValue && (
                    <div className="input-clear-container" onClick={clearDropdown}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                )}
            </div>

            {/* Dropdown Options */}
            {open && (
                <div className={`dropdown ${open ? "active" : ""}`}>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((opt, index) => (
                            <div
                                key={idTitle ? opt[idTitle] : index} // Use idTitle if provided
                                onClick={() => onItemSelected(opt)}
                                className="option"
                            >
                                {opt?.imageName && (
                                    <img src={`http://localhost:8082/api/image/${opt?.imageName}`} className="category-image me-1" alt="category-image" />
                                )}
                                {keyTitle ? opt[keyTitle] : opt}
                            </div>
                        ))
                    ) : (
                        <div className="no-results">No results found</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
