import mammoth from "mammoth";
import { convert } from "html-to-text";
import QuizPage from "./quiz/QuizPage";
export function removeImageTags(inputString) {
    return inputString.replace(/<img[^>]*>/g, ''); // This removes all <img> tags and their contents
}

export const txt = async (setQuiz, fileInfo, setText, setLoading,navigate) => {
  const file = fileInfo[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      try {
        const result = await mammoth.convertToHtml({ arrayBuffer });
        const html = removeImageTags(result.value);
        const pureText = convert(html, { wordwrap: false });

        setText(pureText);

        // Fetch quiz from the backend
        const response = await fetch('http://localhost:3000/generate-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ inputText: pureText }),
        });
        const data = await response.json();
        console.log('Quiz Output:', data.quiz);
        setQuiz(data.quiz);
      } catch (error) {
        console.error('Error processing file:', error);
      } finally{
          // implement set interval here just to ensure that everything goes right and to have loading screen for longer
          setTimeout(()=>{
            setLoading(false);
            navigate('/quiz');//navigating to quiz page after the 9 seconds complete
          }, 2000)

      }
    };
    reader.readAsArrayBuffer(file);
  }
};