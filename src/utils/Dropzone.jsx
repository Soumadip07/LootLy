import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

function Dropzone({ uploadedImages, setuploadedImages }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const selectedFileRef = useRef(null); // Ref to store the selected image
    // console.log(uploadedImages)
    const onDrop = useCallback((acceptedFiles) => {
        if (uploadedImages.length + acceptedFiles.length > 5) {
            alert('You can only upload a maximum of 5 files.');
            return;
        }

        // Corrected invalid files check
        const invalidFiles = acceptedFiles.filter(file =>
            file.type !== 'image/png' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/jpg'
        );

        if (invalidFiles.length > 0) {
            alert("Only .png, .jpg, and .jpeg files are allowed!");
            return;
        }

        const validFiles = acceptedFiles.filter(file =>
            file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg'
        );

        if (validFiles.length > 0) {
            const filesWithId = validFiles.map(file => ({
                id: Date.now() + Math.random(),
                file,
            }));

            setuploadedImages(prevFiles => [...prevFiles, ...filesWithId]);
        }
    }, [uploadedImages]);


    const handleRemoveFile = (id) => {
        setuploadedImages(prevFiles => {
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
                {uploadedImages.map((uploadedFile, index) => (
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
                {uploadedImages.length < 5 && (
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
