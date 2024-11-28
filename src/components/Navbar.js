import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'; // Assuming the auth state is in Redux

const Navbar = () => {
    const { user } = useSelector(state => state.auth); // Check if user is logged in

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipes">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cuisines">Cuisines</Link>
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <Link className="nav-link" to="/logout">Logout</Link> // Show logout if logged in
                            ) : (
                                <Link className="nav-link" to="/login">Login</Link> // Show login if not logged in
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
