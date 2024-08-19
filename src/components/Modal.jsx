import React from 'react'
import "./Modal.css"
import { toast } from "react-toastify" 
import { useNavigate } from 'react-router-dom'

export const Modal = ({handleIsModalOpen, deleteArticle}) => {
  const navigate = useNavigate()
  const handleDeleteArticle = () => {
    deleteArticle()
    navigate("/")
    toast.success("Noted deleted successfully")

  }

  return (
    <div className="c-modal-overlay">
      <div className="c-modal">
        <button className="close-button" onClick={handleIsModalOpen}>×</button>
        <div className="c-modal-content">
          <h2>Delete Note</h2>
          <p>Are you you want to Delete this article?</p>
          <span className="d-flex justify-content-center">
            <button className="btn btn-danger me-3" onClick={handleDeleteArticle}>Delete</button>
            <button className="btn btn-primary" onClick={handleIsModalOpen}>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Modal
