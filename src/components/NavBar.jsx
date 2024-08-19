import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import { FaPen } from "react-icons/fa6";
import Filter from './Filter';


const NavBar = ({searchText, handleSearchText}) => {
  return (
    <nav id="desktop-nav" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
           {/* Left */}
           <div className="d-flex align-items-center">
           <Link className="nav-link d-flex align-items-center" to="/" style={{ fontWeight: "bold" }}>
                <span>Odisea</span>
                <i className="bi bi-book-half ms-2" style={{ color: "#0dcaf0" }}></i>     
            </Link> 
           </div>

           {/* Center */}
           <div className="mx-3">
                <div className="input-group">
                    <input
                        className="form-control search-input"
                        style={{ borderRadius: '14px' }}
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        value={searchText}
                        onChange={(e) => handleSearchText(e.target.value)}
                    />
                    <button className="btn btn-outline-success d-none" type="submit"></button>  
                </div> 
           </div>

           {/* Right */}
            <div className="btn-group dropleft">
                <Link to="/new-article" style={{ textDecoration: "none"}}>
                        <button
                            style={{ borderRadius: "14px"}}
                            className="btn btn-outline-primary btn-md"
                            type="button"
                        >
                            <FaPen className="me-2 fs-6" /> Add Article
                        </button>
                </Link>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
