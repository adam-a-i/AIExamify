import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  // Simulate progress over time
  useEffect(() => {
    if (progress < percentage) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1; // Adjust increment speed here (e.g., 1)
        });
      }, 50); // You can adjust the speed by changing the interval time
    
      return () => clearInterval(interval); // Clear the interval when the component unmounts
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
          pathTransitionDuration: 0.4, // Set a smooth duration
          pathColor: `#bebbfc`, // Adjust the path color
          textColor: 'black',
          trailColor: '#d6d6d6',
          backgroundColor: '#6a0dad',
        })}
      />
    </div>
  );
};

export default Circle;
