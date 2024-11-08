import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [history, setHistory] = useState([]); // State to store the history

  // Fetch history when the component mounts
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          "https://test1.populardiagnostic.org/api/posts/history"
        );
        // Access the payload array and set it to state
        setHistory(response.data.payload);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-6 bg-[#d8dce3]">
              <h2 className="text-4xl pt-20 text-[#2a5ea9] font-bold md:text-center">
          All contents generated
        </h2>
      <div className="md:col-span-3 col-span-4 grid grid-rows-5 gap-3 mx-auto pt-10 md:pt-10 md:p-20">
        {history.map((item) => (
          <div key={item._id} className="group">
          <div className="p-4 transition-all duration-700 transform bg-gray-200 group-hover:bg-yellow-50 rounded-2xl shadow-xl hover:shadow-2xl cursor-context-menu hover:-translate-y-2 flex">
            <div className="flex flex-col-reverse md:flex-row w-full gap-3">
              <span className="text-gray-500 group-hover:text-gray-900  text-sm bg-gray-300 group-hover:bg-yellow-300 p-3 rounded group-hover:rounded-2xl md:group-hover:scale-110 text-center my-auto flex-shrink-0 w-2/10">
                {new Date(item.createdAt).toLocaleString()}
              </span>
              <p className="text-gray-700 px-3 w-8/10 flex-grow">
                {item.postContent}
              </p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
