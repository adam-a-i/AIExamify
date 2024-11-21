import React from 'react'
import '../../css/modal.css'
const Modal = ({fileInfo, closeModal}) => {
  return (
    <div className="modal">
        <div className='overlay'>
            <div className="modal-content">
                <div className="headerm">
                <p className="options">Options</p>
                <button className='close' onClick={closeModal}><p className='x'>X</p></button>
                </div>
                
                <div className="quiz-options">
                <div className="quiz-options">
                <div className="file-info">
                    <p className="filename">File:</p>
                    <p className="file-path">{fileInfo[0].name}</p>
                </div>
                <p className='num-qs'>Questions</p>
                <select 
                className='dropdown'
                name="question-number" 
                id="question-number">
                    <option value="Auto">Auto</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                </select>
                <p className='difficulty'>Difficulty</p>
                <select 
                className='dropdown'
                name="question-difficulty" 
                id="question-difficulty">
                    <option value="Auto">Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                
                </div>

                </div>
                <div className="footerm">
                <button className='cancel' onClick={closeModal}>Cancel</button>
                <button className='create'> Create</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
