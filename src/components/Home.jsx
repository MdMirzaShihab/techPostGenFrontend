import { useState } from 'react';
import axios from 'axios';

const Home = () => {

    const defaultText = "Hit 'Generate Content', sit back and relax, – Your masterpiece content is just a click away! ✨";
  // Initial state for content with default text
  const [content, setContent] = useState(defaultText);

  // Function to generate content from the API
  const generateContent = async () => {
    try {
      const response = await axios.post("https://test1.populardiagnostic.org/api/posts/generate");
      // Set the generated content from the API
      const postContent = response.data.payload.postContent;

      const contentWithEllipsis = postContent + '...';

    setContent(contentWithEllipsis);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  // Function to copy the content to the clipboard
  const copyToClipboard = () => {
    if (content && content !== defaultText) {
      navigator.clipboard.writeText(content).then(() => {
        alert('Content copied to clipboard!');
      }).catch((error) => {
        console.error("Error copying content: ", error);
        alert('Failed to copy content.');
      });
    }
  };

  return (
    <div className="p-6">
      <div className="relative p-4 border border-gray-300 rounded">
        {/* Display the generated content */}
        <div className="whitespace-pre-wrap">{content}</div>

        {/* Render copy button only if content is not empty or still showing default text */}
        {content && content !== defaultText && (
          <button
            onClick={copyToClipboard}
            className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500"
            title="Copy to clipboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-clipboard"
              viewBox="0 0 16 16"
            >
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 0h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h2v2a1 1 0 1 0 2 0V0z" />
            </svg>
          </button>
        )}
      </div>

      {/* Generate content button */}
      <button
        onClick={generateContent}
        className="bg-blue-500 text-white p-2 rounded mt-4 ml-auto block"
      >
        Generate Content
      </button>
    </div>
  );
};

export default Home;