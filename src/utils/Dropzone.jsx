import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

function Dropzone() {
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null); // State to track the selected image
    const selectedFileRef = useRef(null); // Ref to store the selected image

    const onDrop = useCallback((acceptedFiles) => {
        if (files.length + acceptedFiles.length > 5) {
            alert('You can only upload a maximum of 5 files.');
            return;
        }

        const validFiles = acceptedFiles.filter(file =>
            file.type === 'image/png' || file.type === 'image/jpeg'
        );
        if (acceptedFiles.filter(file =>
            file.type != 'image/png' || file.type != 'image/jpeg'
        )) {
            alert("Only .png, .jpg, and .jpeg files are allowed!")
        }

        if (validFiles.length > 0) {
            const filesWithId = validFiles.map(file => ({
                id: Date.now() + Math.random(),
                file,
            }));

            setFiles(prevFiles => {
                const updatedFiles = [...prevFiles, ...filesWithId];

                // Set the first uploaded image as the main preview if none selected
                if (!selectedFileRef.current) {
                    setSelectedFile(updatedFiles[0]);
                    selectedFileRef.current = updatedFiles[0];
                }

                return updatedFiles;
            });
        }
    }, [files]);

    const handleRemoveFile = (id) => {
        setFiles(prevFiles => {
            const updatedFiles = prevFiles.filter(file => file.id !== id);

            // If the removed file was the selected preview, reset the preview
            if (selectedFile?.id === id) {
                setSelectedFile(null); // Ensure the preview is removed
                selectedFileRef.current = null;

                // If other files exist, select the first one as the new preview
                if (updatedFiles.length > 0) {
                    setSelectedFile(updatedFiles[0]);
                    selectedFileRef.current = updatedFiles[0];
                }
            }

            return updatedFiles;
        });
    };



    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
    });

    return (
        <section className="dropzone-container">
            {/* Main Preview */}
            {selectedFile && (
                <div className="image-main-preview mb-3">
                    <img
                        src={URL.createObjectURL(selectedFile.file)}
                        alt="main-preview"
                        className="uploaded-main-image"
                    />
                    <button className="remove-btn" onClick={() => handleRemoveFile(selectedFile.id)}>
                        ×
                    </button>
                </div>
            )}

            {/* Image Thumbnails */}
            <div className="uploaded-images">
                {files.map((uploadedFile, index) => (
                    <div className="image-preview" key={uploadedFile.id} onClick={() => {
                        setSelectedFile(uploadedFile);
                        selectedFileRef.current = uploadedFile;
                    }}>
                        <img
                            src={URL.createObjectURL(uploadedFile.file)}
                            alt={`uploaded-file-${index}`}
                            className="uploaded-image"
                        />
                        <button className="remove-btn" onClick={() => handleRemoveFile(uploadedFile.id)}>
                            ×
                        </button>
                    </div>
                ))}

                {/* Upload Box */}
                {files.length < 5 && (
                    <div className="add-image-box" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? <p>Drop here...</p> : <span className="plus-icon">＋</span>}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Dropzone;
