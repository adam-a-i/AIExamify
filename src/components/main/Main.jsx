import React from 'react'
import logo from '../../assets/github.png'
import arrow from '../../assets/arrow.png'
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
                <a href='https://github.com/adam-a-i/aiexamify' target='github repo' rel='noopener noreferrer' className='link'>
                <button className='github-btn'>
                <img 
                    src={logo} 
                    alt='GitHub logo' 
                    className='github-icon'
                />
                    Github
                </button></a>
            </div>
        </div>
        <div className='intro'>
            <div className='short-description'>AI Quiz Builder</div>
            <div className='diagram'>
                <div className='card'>
                    <div className='step'>
                    <p className='title'>Step 1: Upload</p>
                    <p className='explanation'>Click "Upload," select a PowerPoint or DOCX file, confirm, and wait for the system to process it.</p> </div>
                </div>
                <div>
                    <img
                    src={arrow}
                    className='arrow'
                    />
                </div>
                <div className='card'>
                    <div className='step'>
                    <p className='title'>Step 2: You're all set!</p>
                    <p className='explanation'> Answer the quiz, get instant feedback with explanations, view your results, and export the quiz for future use.</p> </div>
                </div>
            </div>
        </div>
        <div className='upload'></div>
    </div>
  )
}

export default Main