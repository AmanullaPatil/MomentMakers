import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
  const user = localStorage.getItem('token');
  console.log(user)
  return (
    <>

      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between">

          <div id="logo">
            {!user ? <h1 style={{ fontSize: "35px" }}><Link to="/">Moment<span>Makers</span></Link></h1> :
              <h1 style={{ fontSize: "35px" }}><Link to="/userdash">Moment<span>Makers</span></Link></h1>
            }
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              {!user ? <li><Link className="nav-link scrollto active" to="/">Home</Link></li> :
                <li><Link className="nav-link scrollto active" to="/userdash">Home</Link></li>
              }
              <li><Link className="nav-link scrollto active" to="/services">Our Services</Link></li>

              {!user ? <li className="dropdown"><a href="/login"><span>Login</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><Link to="/login">User</Link></li>

                  <li><Link to="/vendor">Vendor</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                </ul>
              </li> :
                <li><Link className="nav-link sxcrollto active" to="/my-profile">My Profile</Link></li>




              }
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>


    </>
  )
}

export default Navbar