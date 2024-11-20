import React from 'react'
import '../../css/modal.css'
const Modal = ({fileInfo}) => {
  return (
    <div className="modal">
        <div className='overlay'>
            <div className="modal-content">
                <div className="headerm">
                <p className="options">Options</p>
                <button className='close'><p className='x'>X</p></button>
                </div>
                
                <div className="quiz-options">
                <div className="quiz-options">
                <div className="file-info">
                    <p className="filename">File:</p>
                    <p className="file-path">{fileInfo[0].name}</p>
                </div>
                <p># of questions</p>
                <p>Pick a difficulty</p>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Modal