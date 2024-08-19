import React from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NewArticlePage from './pages/NewArticlePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import EditArticlePage from './pages/EditArticlePage';
import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://127.0.0.1:8000/articles/")
    .then(response => {
      console.log(response.data);
      setArticles(response.data);
      setIsLoading(false);
    })
    .catch(error => {
      console.log(error.message);
    })
  }, [])
 
  const addArticle = (data) => {
    return axios.post("http://127.0.0.1:8000/articles/", data)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.message);
      throw error;
    })
  }

  const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage articles={articles} isLoading={isLoading}  />} />
      <Route path="/new-article" element={<NewArticlePage addArticle={addArticle}/>} />
      <Route path="/edit-article" element={<EditArticlePage />} />
      <Route path="/articles/:slug" element={<ArticleDetailPage />} />
    </Route>

  ))
  return <RouterProvider router={router}  />
  
}

export default App
