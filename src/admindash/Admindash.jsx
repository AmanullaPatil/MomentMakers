import React from 'react'
import Dashnav from './Dashnav'
import Dashside from './Dashside'
import { useNavigate } from 'react-router-dom'
const Admindash = () => {


    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");

        navigate("/");
        window.location.reload();
    };



    return (
        <>

            <header>
                <Dashnav />
                <Dashside />
            </header>
            <main style={{ marginTop: "55px" }}>
                <div className="container pt-4">


                    <h3 className='my-3 px-2' style={{ fontWeight: "700" }}>Welcome Admin,</h3>

                    <p className='my-3 px-2' style={{ fontSize: "20px" }}>Admin Details</p>

                    <div className="container px-2" style={{ marginTop: "0px", paddingTop: "0px" }}>

                        <button className='btn btn-sm btn-danger px-3' onClick={handleLogout}>Logout</button>
                    </div>




                </div>
            </main>


        </>
    )
}

export default Admindash