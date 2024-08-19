import React from 'react'
import { FaNoteSticky } from 'react-icons/fa6';
import { MdMarkunread } from 'react-icons/md';
import { Link } from 'react-router-dom';
import formatDate from '../utils/FormatDate';

const ArticleCard = ({ article }) => {

  const content = `${article.content.split(" ").slice(0, 20).join(" ")} ...`
  const color = article.category === "Personal" ? "#0dcaf0" : article.category === "Sports" ? "#ffc107" : article.category === "Cinema" ? "green" : "purple"
  return (
    <div className="col-md-4 single-article-item all-category">
      <div className="card card-body">
        <span className="vr" style={{ position: "absolute", left: "0%", height: "32px", width: "3px", backgroundColor: color, opacity: "0.8", borderRadius: "16%" }}></span>
        <FaNoteSticky style={{ marginLeft: "auto", color: color }} />
        <Link to={`/articles/${article.slug}`} style={{ textDecoration: "none", color: "black" }}>
          <h5 
            className="article-title text-truncate w-75 mb-0" 
            data-articleheading="Book a Ticket for Movie">
            { article.title }
          </h5>
        </Link>
        <p className="article-date font-12 text-muted"> { formatDate(article.created_at) } </p>
        <div className="article-content">
          <p 
            className="article-inner-content text-muted" 
            data-articlecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
            { content}
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/">
              <MdMarkunread
                    style={{ fontSize: "25px", marginRight: "2px", cursor: "pointer", color: color }}
              />
          </Link>
          <small className="text-muted"> { article.category } </small>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
