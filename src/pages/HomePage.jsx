import React from 'react'
import NavBar from "../components/NavBar"
import ArticleCardContainer from "../components/ArticleCardContainer"
import Filter from '../components/Filter'

const HomePage = ({ articles, isLoading, handleFilterText, filterText }) => {
  return (
    <>
        {articles.length < 1 ? <h4 style={{textAlign: "center", marginTop: "35px"}}>No Articles Found🥲</h4> : <Filter handleFilterText={handleFilterText}/>}
        <ArticleCardContainer articles={articles} isLoading={isLoading} />
    </>
  )
}

export default HomePage
