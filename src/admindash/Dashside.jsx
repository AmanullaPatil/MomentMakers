import React from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'

const Dashside = () => {
    return (
        <>

            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link to="/admindash" className="list-group-item list-group-item-action py-2 ripple active"
                        ><i className="fas fa-lock fa-fw me-3"></i><span>My profile</span></Link>

                        <Link to="/all-signed-users" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-lock fa-fw me-3"></i><span>Users</span></Link>
                        <Link to="/all-signed-vendors" className="list-group-item list-group-item-action py-2 ripple"
                        ><i className="fas fa-lock fa-fw me-3"></i><span>Vendors</span></Link>

                    </div>
                </div>
            </nav>



        </>
    )
}

export default Dashside