import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL; // use Amplify env variable

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json(); // assuming your API returns JSON
        setApiResponse(data); // save response to state
      } catch (error) {
        console.error("Error fetching API:", error);
        setApiResponse({ error: "Failed to fetch API" });
      }
    }

    fetchMessage();
  }, [API_URL]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Amplify Frontend</h1>
      <p>Backend API integration coming next</p>

      <div style={{ marginTop: 20 }}>
        <h2>API Response:</h2>
        <pre>{apiResponse ? JSON.stringify(apiResponse, null, 2) : "Loading..."}</pre>
      </div>
    </div>
  );
}

export default App;
