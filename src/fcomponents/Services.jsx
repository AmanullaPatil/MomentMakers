import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import Categorieslist from './categories/Categorieslist';
import { Modal, Button } from 'react-bootstrap'; // Import modal components
import UserProfile from './UserProfile';
import ViewProfile from './ViewProfile';
import { API_BASE_URL } from '../config/config';

const Services = () => {
  const user = localStorage.getItem('token');
  const [organizers, setOrganizers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    getOrganizers()
  }, []);

  const getOrganizers = async () => {
    console.log(1)
    const res = await axios.get(API_BASE_URL + '/auth/organizers', { Headers: { "Content-Type": 'application/json' } })
      .then(response => {
        setOrganizers(response.data);
      })
      .catch(error => {
        console.error('Error fetching organizers:', error);
      });
  }

  const handleViewProfile = user => {
    setSelectedUser(user);
    setShowProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setSelectedUser(null);
    setShowProfileModal(false);
  };

  return (
    <>
      <Navbar />
      {/* Other components and JSX */}
      <div className="container">
        <h1 className='text-center my-5'>Find Organizers</h1>
      </div>
      <Categorieslist />
      <div className="container" style={{ fontFamily: "sans-serif" }}>
        <div className="row flex flex-wrap my-3 justify-center">

          {
            organizers.map(organizer => (
              <div className="col w-36 card my-3 mx-3" style={{ width: "18rem" }}>
                {/* <img src="/assets/img/events-default.jpg" className="card-img-top" alt="..." /> */}
                {
                  organizer.image ?
                    <img className="card-img-top w-36" src={`http://localhost:5000/${organizer.image}`} alt="event" />
                    :
                    <img className="card-img-top h-40 w-36" src='/assets/img/events-default.jpg' alt='event default' />
                }
                {/* <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div> */}
                <div className="card-body" >
                  <h5 className="card-title" style={{ fontWeight: "700" }}>{organizer.firstname}</h5>

                  <p style={{ color: "blue", margin: "0", marginBottom: "2px" }}>{organizer.state}</p>

                  <p style={{ margin: "0", marginBottom: "2px" }}>₹ <b style={{ color: "red" }}>{organizer.pricing}</b> onwards</p>
                  <p style={{ margin: "0", marginBottom: "5px" }}><b style={{ color: "brown" }}>{organizer.category}</b></p>


                  {user ? <button className="btn btn-info btn-sm" onClick={() => handleViewProfile(organizer)}>View</button> :
                    <ViewProfile />

                  }
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <Modal show={showProfileModal} onHide={handleCloseProfileModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && <UserProfile user={selectedUser} />}
        </Modal.Body>
        <Modal.Footer>
          <button type='button' className="btn btn-secondary" onClick={handleCloseProfileModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default Services;


