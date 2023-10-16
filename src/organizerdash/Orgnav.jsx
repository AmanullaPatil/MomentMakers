import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Orgnav = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const user = localStorage.getItem('token');
  console.log(user)
  return (
    <>

      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between">

          <div id="logo">
            <h1><Link to="/organizer">Moment<span>Makers</span></Link></h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link className="nav-link scrollto active" to="/organizer">Home</Link></li>
              <li><Link className="nav-link scrollto active" to="/vendorservices">See Other Organizers</Link></li>


              <li><Link className="nav-link sxcrollto active" to="/my-vendor-profile">My Vendor Profile</Link></li>





            </ul>

          </nav>

        </div>
        <i className="bi bi-list mobile-nav-toggle"  ></i>
      </header>

      {/* <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li> */}
      {/* <li><Link className="nav-item" to="/organizer">Home</Link></li>
          <li><Link className="nav-item" to="/vendorservices">See Other Organizers</Link></li>


          <li><Link className="nav-item" to="/my-vendor-profile">My Vendor Profile</Link></li>
        </ul>
        {/* <span class="navbar-text">
              Navbar text with an inline element
            </span> */}
      {/* </div> */}

    </>
  )
}

export default Orgnav