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
    // 🔹 Check if options is an array
    useEffect(() => {
        if (options && !Array.isArray(options)) {
            console.error("Options prop should be an array.");
            setFilteredOptions([]);
        } else {
            console.log("Options prop is an array.");

            setFilteredOptions(options);
        }
    }, []);
    // 🔹 Close dropdown when clicking outside
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

        if (!Array.isArray(options)) return; // If options is not an array, do nothing

        // 🔹 Filter options based on search term
        const filtered = options.filter((opt) =>
            (keyTitle && opt[keyTitle] ? opt[keyTitle] : opt).toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredOptions(filtered);

    };

    // 🔹 Select an option
    const onItemSelected = (opt) => {
        if (!Array.isArray(options)) return; // If options is not an array, do nothing

        setInputValue((keyTitle && opt[keyTitle] ? opt[keyTitle] : opt)); // Update input text
        onChange((keyTitle && opt[keyTitle] ? opt[keyTitle] : opt)); // Update parent state
        setOpen(false); // Close dropdown
    };

    // 🔹 Clear input value
    const clearDropdown = (e) => {
        e.stopPropagation(); // Prevent dropdown from toggling
        setInputValue("");
        onChange("");
    };

    // 🔹 Toggle dropdown (Prevent icon selection)
    const onInputClick = (e) => {
        if (!Array.isArray(options)) return; // If options is not an array, do nothing
        if (e.target.tagName !== "SPAN") {
            setOpen((prev) => !prev);
        }
    };

    // console.log(filteredOptions, "key", keyTitle, "sad", idTitle, "optuiojns", options)
    return (
        <div className="dropdown-container" ref={dropdownRef}>
            {/* Input Field */}
            <div className="input-container" onClick={onInputClick}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={onInputChange} // Handle search input
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
                                {keyTitle ? opt[keyTitle] : opt} {/* Use keyTitle if provided */}
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
