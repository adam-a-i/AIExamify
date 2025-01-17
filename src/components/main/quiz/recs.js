const apiKey = import.meta.env.VITE_YOUTUBE_API;

export const txt = async (quiz, incorrectAnswers) => {// generates recommendations for quiz mistake topics
    const quizJson = JSON.stringify(quiz);
    const incorrectAnswersJSON = JSON.stringify(incorrectAnswers);
    try {
        const response = await fetch('http://localhost:3000/generate-keywords', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({quiz: quizJson, incorrectAnswers: incorrectAnswersJSON}),
        });
        const data = await response.json();
        console.log('Recommendation Output:', data);
        return data;
      } catch (error) {
        console.error('error generating recs');
      }
    }

    export const youtubeVideo = async (videoQuery) => { // yt vid reccomendation call
      try {
          const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(videoQuery)}&type=video&part=snippet&maxResults=4`);
          const data = await response.json();
          console.log('Recommendation Output:', data);
          return data; // json for yt rec
        } catch (error) {
          console.error('error generating videos');
        }
      }
