import React from 'react'
import './Dash.css'
import { useNavigate } from 'react-router-dom';
import myuser from './img/myuser.png'


const Dashnav = (props) => {


    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/");
        window.location.reload();
    };



    return (
        <>


            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler dropdown-toggle"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars dropdown"></i>
                    </button>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            {/* <li><hr class="dropdown-divider"></li> */}
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>

                    <a className="navbar-brand" href="/admindash">
                        <h3>Moment Makers Admin</h3>
                    </a>



                    <ul className="navbar-nav ms-auto d-flex flex-row">


                        <li className="nav-item dropdown mx-5 px-4">
                            <a
                                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                href="/organizer"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src={myuser}
                                    className="rounded-circle"
                                    height="30"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-start"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <li className="dropdown-item" onClick={handleLogout}>Logout</li>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )
}

export default Dashnav