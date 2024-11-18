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
    
    const {getRootProps, getInputProps, isDragAccept, isDragReject} = useDropzone({onDrop,
        multiple: false, //so user cannot upload multiple files, takes latest
        accept: {
            'audio/mpeg': ['.mp3'],   // For MP3 files
            'application/pdf': ['.pdf'], // For PDFs
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'], // For DOCX
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'], // For PPTX
          }
    })
  return (
    <div>
        <p className='help'>Try it out by uploading a screenshot, photo, or entering your text content below. It even works with handwritten content.</p>
        <div>
            <div className='upload'  {...getRootProps()}>
                <input {...getInputProps()}/>
                {
                    isDragAccept ? <p className='upload-text'>😊 Drop it here</p>:
                    <div className='upload-wrapper'>
                    <UploadIcon />
                    <p className='upload-text'> Drag a document here or click to browse</p></div>
                }
                
            </div>
        </div>
    </div>
  )
}

export default Dropzone