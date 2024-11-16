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
            <div className='explanation'></div>
            <div className='diagram'>
                <div className='card'>
                    <p>First Step: Upload</p>
                    <p>To upload a file, simply click on the "Upload" button and select a PowerPoint or DOCX file from your computer. Once you've chosen the file, confirm the upload and wait a few moments for the system to process the content.</p>
                </div>
                <div className='card'>
                    <p>Second Step: Start your quiz!</p>
                    <p>Once you start the quiz, you'll be presented with a series of questions based on the content of your uploaded file. After answering each question, you'll immediately receive feedback on your response, along with a brief explanation to help you understand the correct answer. This process will continue for all the questions, and once you finish the quiz, you'll get a summary of your results, including your overall score and a recap of your performance.</p>
                </div>
            </div>
        </div>
        <div className='upload'></div>
    </div>
  )
}

export default Main