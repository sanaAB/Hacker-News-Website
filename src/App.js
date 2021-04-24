import React, { useState, useEffect } from "react";
import './App.css';
import News from './components/News/News.js'
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [news, setNews] = useState([]);

useEffect(() => {
  const getNews = async () => {
  try {
    const response = await fetch("http://hn.algolia.com/api/v1/search?query=async");
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setNews(jsonResponse);
      return
    }
    throw new Error("Request Failed!");
  } catch (error) {
    console.log(error);
  }
};

getNews();
}, []);

  return (
    <div className="App">
          <div className="header">
            <h1>Header</h1>
            <p>My supercool header</p>
            <SearchBar news={news}  />

          </div>
          <News news={news} />
          <footer>
            footer
          </footer>
    </div>
  );
}

export default App;
