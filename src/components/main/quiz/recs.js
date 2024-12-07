
export const txt = async (quiz, incorrectAnswers) => {
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