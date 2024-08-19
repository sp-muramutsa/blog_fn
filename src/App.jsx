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
import { toast } from 'react-toastify';

const App = () => {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterText, setFilterText] = useState("")
  const [searchText, setSearchText] = useState("")  

  const handleFilterText = (val) => {
    setFilterText(val);
  } 

  const handleSearchText = (val) => {
    setSearchText(val)
  }

  const filteredArticles = filterText === "" 
  ? articles 
  : articles.filter(article => 
      filterText === "Personal" ? article.category === "Personal" 
    : filterText === "Cinema" ? article.category === "Cinema"
    : filterText === "Sports" ? article.category === "Sports"
    : filterText === "Literature" ? article.category === "Literature"
    : true 
  );


  useEffect(() => {
    if(searchText.length < 3) {
      // Reset to show all articles if searchText is cleared or too short
      axios.get("http://127.0.0.1:8000/articles/")
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
      return;
    }

    axios.get(`http://127.0.0.1:8000/articles-search/?search=${searchText}`)
    .then(response => {
      console.log(response.data)
      setArticles(response.data)
    })
    .catch(error => {
      console.log(error.message)
    })
  }, [searchText])

  useEffect(() => {
    setIsLoading(true);
  
    axios.get("http://127.0.0.1:8000/articles/")
      .then(response => {
        console.log(response.data);
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the articles!", error);
        setIsLoading(false);
      });
  }, []); 
  
 
  const addArticle = (data) => {
    return axios.post("http://127.0.0.1:8000/articles/", data)
    .then(response => {
      setArticles([...articles, response.data])
      toast.success("A new article has been added!")
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.message);
      throw error;
    })
  }

  const updateArticle = (data, slug) => {
    return axios.put(`http://127.0.0.1:8000/articles/${slug}`, data)
    .then(response => {
      console.log(response.data)
      toast.success("Article updated successfully!")
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const deleteArticle = (slug) => {
    return axios.delete(`http://127.0.0.1:8000/articles/${slug}`)
    .then(response => {
      setArticles(articles.filter(article => article.slug !== slug));
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const router = createBrowserRouter(createRoutesFromElements (
    <Route path="/" element={<MainLayout searchText={searchText} handleSearchText={handleSearchText}/>}>
      <Route
      index 
      element={
        <HomePage 
          filterText={filterText}
          articles={filteredArticles} 
          isLoading={isLoading} 
          handleFilterText={handleFilterText} 
          />
        } 
      />
      <Route path="/new-article" element={<NewArticlePage addArticle={addArticle}/>} />
      <Route path="/edit-article/:slug" element={<EditArticlePage updateArticle={updateArticle} />} />
      <Route path="/articles/:slug" element={<ArticleDetailPage deleteArticle={deleteArticle}/>} />
    </Route>

  ))
  return <RouterProvider router={router}  />
  
}

export default App
