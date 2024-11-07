import { useEffect, useState } from "react";
import axios from "axios";
import { coverImg } from "../assets";

const NewNothing = () => {
  const defaultText =
    "Hit 'Generate Content', sit back and relax, – Your masterpiece content is just a click away! ✨";
  // Initial state for content with default text
  const [content, setContent] = useState(defaultText);
  const [history, setHistory] = useState([]);

  // Function to generate content from the API
  const generateContent = async () => {
    try {
      const response = await axios.post(
        "https://test1.populardiagnostic.org/api/posts/generate"
      );
      // Set the generated content from the API
      const postContent = response.data.payload.postContent;

      const contentWithEllipsis = postContent + "...";

      setContent(contentWithEllipsis);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          "https://test1.populardiagnostic.org/api/posts/history"
        );
        // Slice the array to get the latest 5 posts
        const latestHistory = response.data.payload.slice(0, 5);
        setHistory(latestHistory); // Set the history state with the latest 5 posts
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  // Function to copy the content to the clipboard
  const copyToClipboard = () => {
    if (content && content !== defaultText) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          alert("Content copied to clipboard!");
        })
        .catch((error) => {
          console.error("Error copying content: ", error);
          alert("Failed to copy content.");
        });
    }
  };

  return (
    <div className=" w-full bg-slate-500 h-full">
      <div className="relative bg-yellow-50">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                Generate Your Tech Content Here
              </h1>
              <div action="" className="w-full mt-12">
                <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                  <div className="relative p-4">
                    {/* Display the generated content */}
                    <div className="whitespace-pre-wrap">{content}</div>

                    {/* Render copy button only if content is not empty or still showing default text */}
                    {content && content !== defaultText && (
                      <button
                        onClick={copyToClipboard}
                        className="absolute bottom-2 right-2 bg-white border-yellow-200 text-yellow-900 p-2 rounded-full hover:bg-blue-500"
                        title="Copy to clipboard">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-clipboard"
                          viewBox="0 0 16 16">
                          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 0h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h2v2a1 1 0 1 0 2 0V0z" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <button
                    onClick={generateContent}
                    className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12">
                    <span className="hidden text-yellow-900 font-semibold md:block">
                      Generate Content
                    </span>
                  </button>
                </div>
              </div>
              <p className="mt-8 text-gray-700 lg:w-10/12">
                To keep your tech page active, we generate new content 24/7 for
                you.
              </p>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
              <img
                src={coverImg}
                alt="Cover tech image"
                className="animate-upDown"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
      <div className="w-full p-6">
        {/* Display latest 5 posts from history */}
        <h2 className="text-xl text-black font-bold mb-4">Recent History</h2>
        <ul>
          {history.map((item) => (
            <li key={item._id} className="p-2 border-b">
              <p>{item.postContent}</p>
              <span className="text-gray-500 text-sm">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      </div>
    </div>
  );
};

export default NewNothing;
