import React, { useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://backendurlshortner.onrender.com/shorturl", {
        url: url,
      });

      if (response.data.shortURL) {
        setShortUrl(response.data.shortURL);
      }
    } catch (error) {
      console.error("Error creating short URL:", error);
    }
  };


  return (
    <div>
  
    <div className="cont">
    <marquee behavior="" direction="">
    <h3>Just copy and paste the URL and get a shortend URL in one click 👍</h3>
  </marquee>
      <div className="App">
      <h2>URL SHORTENER</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
          className="inp"
            type="text"
            placeholder="Paste your long URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">Shorten</button>
        </div>
        <img src="https://www.sms-magic.com/wp-content/uploads/2021/01/Shorten-URL-1536x952.png" alt="image" />
      </form>
      {shortUrl && (
        <div>
          <div className="out">
            
              <span>Short URL: 👉</span>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default App;