import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom' // to receeive props from prev page
import Confetti from 'react-confetti';
import Circle from './Circle.jsx'
// ONLY THING LEFT IS TO WORK ON THE VIDEO QUERY AND GENERATE THE FIRST 3 VIDEOS THEN DISPLAY THEM AND MAKE THEM LOOK NICE AND ACCESSIBLE USING CSS
const Result = () => {
    const location = useLocation();
    const {videos, rec, correctAnswers, minutes, seconds, incorrectAnswers} = location.state || {};
    const totalAnswers = (correctAnswers || 0) + (incorrectAnswers ? incorrectAnswers.length : 0);
    const percentage = totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0;
    const [confettiPieces, setConfettiPieces] = useState(300);
    useEffect(() => {
      const interval = setInterval(() => {
        setConfettiPieces((prev) => Math.max(prev - 10, 0)); // reduce pieces of confetti
      }, 200);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
    {<Confetti numberOfPieces={confettiPieces} width={window.innerWidth} height={document.documentElement.scrollHeight} />}
    <div className="logo">
      <p className='name'>
        <span className='ai'>AI</span>
        <span className='examify'>Examify</span>
      </p>
    </div>

      <div className="results">
        <h1>Your results!</h1>
        <Circle percentage={percentage}/>
        <div className='advice'>You scored {correctAnswers} out of {correctAnswers+incorrectAnswers.length}!</div>
        <div className='advice'>
        Here's how long it took you to complete the quiz
      </div>
        <div className='advice'>
                    <span>{String(minutes).padStart(2,'0')}:</span><span>{String(seconds).padStart(2,'0')}</span>
        </div>
        {
          ((correctAnswers/incorrectAnswers.length) <= 0.5) ? ( // checks if person failed or not
            <div className='advice failure'>You could you use some more practice 😢</div>
          ):(
            <div className='advice success'>Great Job! Keep going 😄</div>
          )
        }
        <div className="recommendation">
        <h2>Here are some topics you can review:</h2>
          <div className='topics'>
            {rec.quiz.topics.map((topic,index) => {
                return(
                  <div>
                <div key={index} className='topic'>
                  • {topic}
                </div></div>
                )
            })}
          </div>
          <h2>Here are some videos that you can watch!</h2>
          <div className='videos'>
            {videos.items.map((video,index) => { // mapping through the videos in arary to display them
                return (
                <div key={index} className='video'>
                  <iframe
                  title={video.snippet.title}
                  src={`https://www.youtube.com/embed/${video.id.videoId}`} // inserting video id which can be turned into link to show
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  className='video-frame'
                  allowFullScreen
                  />
                </div>
                )
            })}
            </div>
          </div> 
      </div>
    </>
  )
}

export default Result