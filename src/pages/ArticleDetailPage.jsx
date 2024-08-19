import React from 'react';
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import "./ArticleDetailPage.css"; 
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import formatDate from '../utils/FormatDate';

const ArticleDetailPage = () => {

  const [article, setArticle] = useState({})

  const {slug} = useParams()
  
  useEffect( () => {
    axios.get(`http://127.0.0.1:8000/articles/${slug}`)
    .then(response => {
      setArticle(response.data) 
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.message)
    })
  })
  
  return (
    <div className="article-container">
    <h3 className="title">{ article.title }</h3>
    <span className="d-flex justify-content-center">
        <p className="article-date font-12 text-muted me-5" > written: { formatDate(article.updated_at) }</p>
    </span>
    <span>
        <Link to="/edit-article">
          <button className="btn btn-primary"> <FiEdit /><span>Edit</span></button>
        </Link>
        <button className="btn btn-danger"> <BiSolidTrashAlt /><span>Delete</span></button>
    </span>
    <p className="content"> { article.content } </p>
      
    </div>
  )
}

export default ArticleDetailPage
