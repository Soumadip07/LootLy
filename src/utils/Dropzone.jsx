import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

function Dropzone({ uploadedImages, setuploadedImages, isUpdateMode, isImageUpdated, setIsImageUpdated }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const selectedFileRef = useRef(null); // Ref to store the selected image
    const [imageRemoved, setImageRemoved] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        console.log("hello")
        // Check for file limit
        if (uploadedImages.length + acceptedFiles.length > 5) {
            alert('You can only upload a maximum of 5 files.');
            return;
        }

        // Validate file types
        const invalidFiles = acceptedFiles.filter(file =>
            file.type !== 'image/png' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/jpg'
        );

        if (invalidFiles.length > 0) {
            alert("Only .png, .jpg, and .jpeg files are allowed!");
            return;
        }

        // Filter valid files
        const validFiles = acceptedFiles.filter(file =>
            file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg'
        );

        // If there are valid files, append them to uploadedImages
        if (validFiles.length > 0) {
            const filesWithId = validFiles.map(file => ({
                id: Date.now() + Math.random(),
                file,
            }));

            // Update the state with new files
            setuploadedImages(prevFiles => [...prevFiles, ...filesWithId]);
            if (uploadedImages && imageRemoved) {
                setIsImageUpdated(true)
            }
            // Reset imageRemoved to false when a new image is uploaded
            setImageRemoved(false);
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

    const handleImageRemove = () => {
        setuploadedImages([]); // Clear all uploaded images
        setImageRemoved(true);  // Set imageRemoved to true
        setSelectedFile(null);  // Reset selected file
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
    });
    console.log(uploadedImages, "uploaded")

    return (
        <section className="dropzone-container">
            {/* Main Preview */}
            {(selectedFile) && (
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

            {isUpdateMode === "YES" && !imageRemoved && uploadedImages && !selectedFile && uploadedImages?.file && (
                <div className="image-main-preview mb-3">
                    <img
                        src={`http://localhost:8082/api/products/image/${uploadedImages?.file}`}
                        alt="main-preview"
                        className="uploaded-main-image"
                    />
                    <button className="remove-btn" onClick={handleImageRemove}>
                        ×
                    </button>
                </div>
            )}

            {(isUpdateMode !== "YES" || imageRemoved || uploadedImages.length < 5) && (
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
                    {isUpdateMode === "YES" ? (
                        (
                            <div className="add-image-box" {...getRootProps()}>
                                <input {...getInputProps()} />
                                {isDragActive ? <p>Drop here...</p> : <span className="plus-icon">＋</span>}
                            </div>
                        )
                    ) : (
                        uploadedImages.length < 5 && (
                            <div className="add-image-box" {...getRootProps()}>
                                <input {...getInputProps()} />
                                {isDragActive ? <p>Drop here...</p> : <span className="plus-icon">＋</span>}
                            </div>
                        )
                    )}
                </div>
            )}
        </section>
    );
}

export default Dropzone;
