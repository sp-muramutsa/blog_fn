import React from 'react';
import "./NewArticlePage.css";
import { useState } from 'react';
import AddArticle from '../App' 

const NewArticlePage = ({ addArticle }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [category, setCategory] = useState()

    const newArticle = {
        "title": title,
        "content": content,
        "category": category
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!title || !content || !category)
        {
            console.log("Form missing data")
            console.log(title)
            console.log(content)
            console.log(category)
            return
        }
        console.log(newArticle)
        addArticle(newArticle)
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <h5>New Article</h5> 

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"> 
                Category
            </label>   
            <select
            className="form-select" 
            aria-label="Default select example" 
            style={{height: "40px"}} 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
                <option value="" disabled selected>Select Article Category</option>   
                <option value="Personal">Personal</option>
                <option value="Cinema">Cinema</option>
                <option value="Literature">Literature</option>
                <option value="Sports">Sports</option>
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
            value={title}
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
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea> 
        </div>

        <div className="mb-3">
            <button type="submit" className="btn btn-info">
                Post Article
            </button>
        </div>
    </form>
  ) 
}

export default NewArticlePage
