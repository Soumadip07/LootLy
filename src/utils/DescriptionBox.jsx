import JoditEditor from 'jodit-react';
import React, { useMemo, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form';

function DescriptionBox() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm();
    const editor = useRef(null);

    // Jodit Editor Config
    const config = useMemo(() => ({
        readonly: false,
        placeholder: "Description for the product",
        height: 350,
        // width: 600,
        background: "#7688db",
        buttons: [
            "source", "bold", "italic", "underline", "strikethrough", "superscript", "subscript",
            "link", "unlink", "image", "table", "code", "list", "align", "hr",
            "undo", "redo", "preview", "outdent", "indent",
            "selectall", "cut", "copy", "paste", "font", "fontsize",
            "paragraph", "hr", "save", "clear"
        ],
        toolbar: true,
    }), []);
    return (
        <div>
            <Controller
                name="content"
                control={control}
                defaultValue=""
                rules={{ required: "Content is required" }}
                render={({ field: { onChange, value } }) => (
                    <JoditEditor
                        ref={editor}
                        value={value}
                        config={config}
                        tabIndex={1}
                        onBlur={(newContent) => onChange(newContent)}
                    />
                )}
            />
        </div>
    )
}

export default DescriptionBox
