import React, { useEffect } from 'react'
import photo from './img/photo.jpg'
import catering from './img/catering.jpg'
import mehandi from './img/mehandi.jpg'
import wedding from './img/wedding.jpg'
import sound from './img/sound.jpg'
import hall from './img/hall.jpg'
import axios from 'axios'
import { API_BASE_URL } from '../config/config'



const Organizers = () => {

  useEffect(() => {
    getOrganizers();
  }, [])

  const getOrganizers = async () => {
    const res = await axios.get(API_BASE_URL + '/auth/organizers', { Headers: { "Content-Type": 'application/json' } })
    if (res.status === 200) {
      console.log(res)
    }
    else {
      console.log(res)
    }
  }

  return (
    <>

      <div className="text-center container mt-5">
        <h1><b>Categories</b></h1>
      </div>


      <div className="container my-5 text-center">
        <div className="row flex flex-wrap">

          <div className="col mx-4 my-2" style={{ "width": "400px" }}>
            <div className="card">
              <a href="/photographers" ><img src={photo} style={{ height: "500px", width: "300px" }} className="card-img-top" alt="..." /></a>


              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "700" }}>Photographers</h5>
              </div>
            </div>
          </div>



          <div className="col mx-4 my-2" style={{ "width": "400px" }}>
            <div className="card" >
              <a href="/caterers" ><img src={catering} style={{ height: "500px", width: "300px" }} className="card-img-top" alt="..." /></a>

              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "700" }}>Food & Caterers</h5>
              </div>
            </div>
          </div>



          <div className="col mx-4 my-2" style={{ "width": "400px" }}>
            <div className="card" >
              <a href="/mehandi"  > <img src={mehandi} style={{ height: "500px", width: "300px" }} className="card-img-top" alt="..." /></a>


              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "700" }}>Mehandi</h5>
              </div>
            </div>
          </div>

          <div className="col mx-4 my-2" style={{ "width": "400px" }}>
            <div className="card">
              <a href="/sound-system" ><img src={sound} style={{ height: "500px", width: "300px" }} className="card-img-top" alt="..." />
              </a>

              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "700" }}>Sound System</h5>
              </div>
            </div>
          </div>



          <div className="col mx-4 my-2" style={{ "width": "400px" }}>
            <div className="card" >
              <a href="/function-halls" ><img src={hall} style={{ height: "500px", width: "300px" }} className="card-img-top" alt="..." /></a>


              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "700" }}>Function Halls/Venues</h5>
              </div>
            </div>
          </div>



          <div className="col mx-4 my-2" style={{ "width": "400px" }}>
            <div className="card" >
              <a href="/wedding" ><img src={wedding} style={{ height: "500px", width: "300px" }} className="card-img-top" alt="..." /></a>


              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "700" }}>Wedding Planners</h5>
              </div>
            </div>
          </div>


        </div>

        <div className="row mt-5">






        </div>

      </div>



    </>
  )
}

export default Organizers