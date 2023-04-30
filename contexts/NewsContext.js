import React, { createContext, useState } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [highlightedNews, setHighlightedNews] = useState(null);

  const fetchNews = async (category) => {
    const apiKey = '12a49cff4f3146478b6b7932c82ac5bc'; 
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=br&category=${category}&pageSize=10&apiKey=${apiKey}`
    );
    const data = await response.json();
    
    const articlesWithImages = data.articles.filter(article => article.urlToImage);
    const highlightedArticle = articlesWithImages.length > 0 ? articlesWithImages[0] : null;
    setHighlightedNews(highlightedArticle ? {
      id: '0',
      title: highlightedArticle.title,
      source: highlightedArticle.source.name,
      date: highlightedArticle.publishedAt,
      imageUrl: highlightedArticle.urlToImage,
    } : null);
    
    setNews(data.articles.filter((article, index) => article !== highlightedArticle).slice(0, 9).map((article, index) => ({
      id: (index + 1).toString(),
      title: article.title,
      source: article.source.name,
      date: article.publishedAt,
      imageUrl: article.urlToImage,
    })));
  };

  return (
    <NewsContext.Provider value={{ news, highlightedNews, fetchNews }}>
      {children}
    </NewsContext.Provider>
  );
};
