import mammoth from "mammoth";
import { convert } from "html-to-text";
export function removeImageTags(inputString) {
    return inputString.replace(/<img[^>]*>/g, ''); // This removes all <img> tags and their contents
}



export const txt = async (fileInfo, setText) => {
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
      } catch (error) {
        console.error('Error processing file:', error);
      }
    };
    reader.readAsArrayBuffer(file);
  }
};
