import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadIcon from '../../assets/UploadIcon.jsx'
const Dropzone = () => {
    const onDrop = useCallback(
      (acceptedFiles) => { // files uploaded found here
        console.log(acceptedFiles);
      },
      [],
    )
    
    const {getRootProps, getInputProps} = useDropzone({onDrop,
        multiple: false //so user cannot upload multiple files, takes latest
    })
  return (
    <div>
        <p className='help'>Try it out by uploading a screenshot, photo, or entering your text content below. It even works with handwritten content.</p>
        <div>
            <div className='upload'  {...getRootProps()}>
                <input {...getInputProps()}/>
                <UploadIcon />
                <p className='upload-text'> Drag a document here or click to browse</p>
            </div>
        </div>
    </div>
  )
}

export default Dropzone