import React from 'react'
import './EditArticlePage.css'
import { useParams, useNavigate  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditArticlePage = ({updateArticle}) => {

    const {slug} = useParams()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/articles/${slug}`)
        .then(response => {
            console.log(response.data)
            setTitle(response.data.title)
            setContent(response.data.content)
            setCategory(response.data.category)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [slug])

    const updatedArticleObject = {
        title: title, 
        content: content,
        category: category
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !content || !category)
        {
            return
        }
        updateArticle(updatedArticleObject, slug)
        navigate(`/articles/${slug}`)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h5>Edit Article</h5> 

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"> 
                Category
            </label>   
            <select 
            className="form-select" 
            aria-label="Default select example" 
            style={{height: "40px"}}
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
            >
                <option>Personal</option>
                <option>Cinema</option>
                <option>Literature</option>
                <option>Sports</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"> 
                Title
            </label>
            <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Article Title..."
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div> 

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"> 
                Content
            </label>   
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={10}
                cols={25}
                placeholder="Article Content..."
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea> 
        </div>

        <div className="mb-3">
            <button type="submit" className="btn btn-info">
                Update Article
            </button>
        </div>
   </form>
  )
}

export default EditArticlePage
