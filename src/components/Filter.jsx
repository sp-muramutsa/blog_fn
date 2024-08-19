import React from 'react'

const Filter = ({handleFilterText}) => {
  return (
    <div className="container" style={{width: "500px", margin: "10px auto"}}>
        <select 
        className="form-select" 
        aria-label="Default select example" 
        style={{height: "50px", borderRadius: "14px"}}
        onChange={(e) => handleFilterText(e.target.value)}
        >
          <option selected value="">All Categories</option>
          <option value="Personal">Personal</option>
          <option value="Cinema">Cinema</option>
          <option value="Literature">Literature</option>
          <option value="Sports">Sports</option>
        </select>
      </div>  
  )
}

export default Filter
