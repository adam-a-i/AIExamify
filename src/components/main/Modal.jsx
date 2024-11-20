import React from 'react'
import '../../css/modal.css'
const Modal = ({fileInfo}) => {
  return (
    <div className="modal">
        <div className='overlay'>
            <div className="modal-content">
                <div className="header">
                <p className="options">Options</p>
                <button className='close'><p className='x'>X</p></button>
                </div>
                
                <div className="file">
                        <p>File {fileInfo[0].name}</p>
                </div>
                <p># of questions</p>
                <p>Pick a difficulty</p>
            </div>
        </div>
    </div>
  )
}

export default Modal