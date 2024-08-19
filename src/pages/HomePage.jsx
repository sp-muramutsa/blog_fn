import React from 'react'
import NavBar from "../components/NavBar"
import ArticleCardContainer from "../components/ArticleCardContainer"

const HomePage = ({ articles, isLoading }) => {
  return (
    <>
        <ArticleCardContainer articles={articles} isLoading={isLoading} />
    </>
  )
}

export default HomePage
