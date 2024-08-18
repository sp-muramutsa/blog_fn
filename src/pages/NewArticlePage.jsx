import React from 'react';
import "./NewArticlePage.css";

const NewArticlePage = () => {
  return (
    <form>
        <h5>New Article</h5> 

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"> 
                Category
            </label>   
            <select className="form-select" aria-label="Default select example" style={{height: "40px"}}>
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
