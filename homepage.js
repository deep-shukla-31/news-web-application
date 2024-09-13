// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('/api/news');
      setNews(response.data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <Link to={`/news/${index}`}>
              <h2>{article.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

// src/components/HomePage.js (inside useEffect)
useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get('http://localhost:3001/api/news');
      setNews(response.data.articles);
    };
  
    fetchNews();
  }, []);
  