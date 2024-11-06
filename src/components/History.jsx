import { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [history, setHistory] = useState([]); // State to store the history

  // Fetch history when the component mounts
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get("/api/posts/history");
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl text-black font-bold mb-4">Generated Content History</h2>
      <ul>
        {history.map((item) => (
          <li key={item._id} className="p-2 border-b">
            <p>{item.postContent}</p>
            <span className="text-gray-500 text-sm">{new Date(item.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;