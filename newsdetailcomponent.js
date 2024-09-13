// src/components/NewsDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function NewsDetails({ news }) {
  const { id } = useParams();
  const article = news[id];

  if (!article) return <div>News not found</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
}

export default NewsDetails;
