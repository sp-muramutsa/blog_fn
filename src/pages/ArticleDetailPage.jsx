import React from 'react';
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import "./ArticleDetailPage.css"; 
import { Link } from 'react-router-dom'; 

const ArticleDetailPage = () => {
  return (
    <div className="article-container">
    <h3 className="title">Odisea(intro)</h3>
    <span className="d-flex justify-content-center">
        <p className="article-date font-12 text-muted me-5" > written: 11 March 2009</p>
        <p className="article-date font-12 text-muted me-5" > last updated: 11 March 2009</p>
    </span>
    <span>
        <Link to="/edit-article">
          <button className="btn btn-primary"> <FiEdit /><span>Edit</span></button>
        </Link>
        <button className="btn btn-danger"> <BiSolidTrashAlt /><span>Delete</span></button>
    </span>
    <p className="content">
    What will become of me?
    If tomorrow I don't wake up
    And God sends someone to look out for me
    I would like to say goodbye before
    But, what will become of me?
    Who will take care of my family?
    In this world of betrayal
    Everything has been an odyssey
    Tell me, what will become of me? 
    </p>
      
    </div>
  )
}

export default ArticleDetailPage
