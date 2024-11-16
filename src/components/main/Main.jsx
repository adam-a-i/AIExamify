import React from 'react'
import logo from '../../assets/github.png'
const Main = () => {
  return (
    <div className='page'>
        <div className='header'>
        <div className='logo'>
            <p className='name'>
                <span className='ai'>AI</span>
                <span className='examify'>Examify</span>
            </p>
        </div>

            <div className='github'>
                <button className='github-btn'>
                <img 
                    src={logo} 
                    alt='GitHub logo' 
                    className='github-icon'
                />
                    github
                </button>
            </div>
        </div>
        <div className='intro'>
            <div className='short-description'>AI Quiz Builder</div>
            <div className='diagram'>
                <div className='card'>
                    <div className='step'>
                    <p className='title'>Step 1: Upload</p>
                    <p className='explanation'>To upload a file, simply click on the "Upload" button and select a PowerPoint or DOCX file from your computer. Once you've chosen the file, confirm the upload and wait a few moments for the system to process the content.</p> </div>
                </div>
                <div className='card'>
                    <div className='step'>
                    <p className='title'>Step 2: You're all set!</p>
                    <p className='explanation'> Start the quiz to answer questions from your uploaded file, with instant feedback and explanations. Once complete, view your results and export the quiz for future use.</p> </div>
                </div>
            </div>
        </div>
        <div className='upload'></div>
    </div>
  )
}

export default Main