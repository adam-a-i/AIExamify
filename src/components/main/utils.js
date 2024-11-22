import mammoth from "mammoth";
import { convert } from "html-to-text";
import { main } from '../../backend/apiPrompt.js';
export function removeImageTags(inputString) {
    return inputString.replace(/<img[^>]*>/g, ''); // This removes all <img> tags and their contents
}



export const txt = async (fileInfo, setText) => { // function to extract text from files
    console.log(fileInfo)
    const file = fileInfo[0]; // Assuming fileInfo is an array of files

    if (file) {
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        try {
          // Pass the ArrayBuffer to mammoth to convert to HTML
          const result = await mammoth.convertToHtml({ arrayBuffer});
          const options = {
              wordwrap: false,
              selectors: [
                  { selector: '*', format: 'inline' }, // Convert all tags to plain text
                ],
            };
          const html = removeImageTags(result.value)
          const Pure_text = convert(html, options);
          setText(Pure_text);
          console.log(Pure_text)
        } catch (error) {
          console.error('Error processing file:', error);
        }
      };
      
      reader.readAsArrayBuffer(file);  // Read the file as an ArrayBuffer
    }
  };