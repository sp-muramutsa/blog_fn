import React from 'react'
import { FaNoteSticky } from 'react-icons/fa6';
import { MdMarkunread } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ArticleCard = ({ color }) => {
  return (
    <div className="col-md-4 single-article-item all-category">
      <div className="card card-body">
        <span className="side-stick" style={{ backgroundColor: color }}></span>
        <FaNoteSticky style={{ marginLeft: "auto", color: color }} />
        <Link to="/article-detail" style={{ textDecoration: "none", color: "black" }}>
          <h5 
            className="article-title text-truncate w-75 mb-0" 
            data-articleheading="Book a Ticket for Movie">
            Book a Ticket for Movie
          </h5>
        </Link>
        <p className="article-date font-12 text-muted">11 March 2009</p>
        <div className="article-content">
          <p 
            className="article-inner-content text-muted" 
            data-articlecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
            Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/">
              <MdMarkunread
                    style={{ fontSize: "25px", marginRight: "2px", cursor: "pointer", color: color}}
              />
          </Link>
          <small className="text-muted">Cinema</small>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
