import React from 'react'
import ArticleCard from './ArticleCard'
import Loader from './Loader'

const ArticleCardContainer = ({ articles, isLoading }) => {
  return (
    <div className="container">
        <div className="note-has-grid row">

          { isLoading && <Loader isLoading={isLoading} /> }        
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
            
        </div> 
    </div>
  )
}

export default ArticleCardContainer
