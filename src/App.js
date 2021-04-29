import React, { useState, useEffect } from "react";
import './App.css';
import News from './components/News/News.js'
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [news, setNews] = useState({hits: []});
  const [query, setQuery] = useState("redux");
  const [isLoading, setIsLoading] = useState(false);



useEffect(() => {
  const getNews = async () => {
  setIsLoading(true);
  try {
    const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query} ` );
    if (response.ok) {
      const jsonResponse = await response.json();
      setNews(jsonResponse);
      setIsLoading(false);
      return
    }
    throw new Error("Request Failed!");
  } catch (error) {
    alert(error);
  }
};

getNews();
}, [query]);

  return (
    <div className="App">
          <div className="header">
            <h1>Header</h1>
            <p>My supercool header</p>
            <SearchBar news={news}  query={query} setQuery={setQuery} />
          </div>
          <News news={news} isLoading={isLoading}/>
          <footer>
            footer
          </footer>
    </div>
  );
}

export default App;
