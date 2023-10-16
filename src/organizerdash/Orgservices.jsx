import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Import modal components
import Orgnav from './Orgnav';
import ViewProfile from '../fcomponents/ViewProfile';
import UserProfile from '../fcomponents/UserProfile';
import Footer from '../fcomponents/Footer';
import VendorCategorieslist from '../fcomponents/categories/VendorCategorieslist';
import { API_BASE_URL } from '../config/config';


const Orgservices = () => {
  const user = localStorage.getItem('token');
  const [organizers, setOrganizers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    axios.get(API_BASE_URL + '/auth/organizers')
      .then(response => {
        setOrganizers(response.data);
      })
      .catch(error => {
        console.error('Error fetching organizers:', error);
      });
  }, []);

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
      <Orgnav />
      {/* Other components and JSX */}
      <div className="container">
        <h1 className='text-center my-5'>Find Organizers</h1>
      </div>
      <VendorCategorieslist />
      <div className="container" style={{ fontFamily: "sans-serif" }}>
        <div className="flex flex-wrap row my-3 justify-center">

          {
            organizers.map(organizer => (
              <div className="col card my-3 mx-3" style={{ width: "18rem" }}>
                {/* <img src="/assets/img/events-default.jpg" className="card-img-top" alt="..." /> */}
                {
                  organizer.image ?
                    <img className="card-img-top h-40" src={API_BASE_URL`/${organizer.image}`} alt="event" />
                    :
                    <img className="card-img-top h-40" src='/assets/img/events-default.jpg' alt='event default' />
                }

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
          <Button variant="secondary" onClick={handleCloseProfileModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default Orgservices;


