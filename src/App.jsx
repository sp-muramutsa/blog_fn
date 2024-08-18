import React from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import NewArticlePage from './pages/NewArticlePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import EditArticlePage from './pages/EditArticlePage';
import './index.css';

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage  />} />
      <Route path="/new-article" element={<NewArticlePage />} />
      <Route path="/edit-article" element={<EditArticlePage />} />
      <Route path="/article-detail" element={<ArticleDetailPage />} />
    </Route>

  ))
  return <RouterProvider router={router}  />
  
}

export default App
