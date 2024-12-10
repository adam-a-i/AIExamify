import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < percentage) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1; // adjust increment speed here (e.g., 1)
        });
      }, 50); // you can adjust the speed by changing the interval time
    
      return () => clearInterval(interval); 
    }
  }, [percentage, progress]);

  return (
    <div className="circle">
      <CircularProgressbar
        value={progress}
        text={`${progress.toFixed(0)}%`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          textSize: '18px',
          pathTransitionDuration: 0.4, // adjust the speed of the progress bar
          pathColor: `#bebbfc`, 
          textColor: 'black',
          trailColor: '#d6d6d6',
          backgroundColor: '#6a0dad',
        })}
      />
    </div>
  );
};

export default Circle;
