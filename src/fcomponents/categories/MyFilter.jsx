import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'; // Import modal components
import Navbar from '../Navbar';
import ViewProfile from '../ViewProfile';
import UserProfile from '../UserProfile';
import Footer from '../Footer';
import Categorieslist from './Categorieslist';
import { API_BASE_URL } from '../../config/config';

const MyFilter = (props) => {
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
      <Navbar />

      {/* Other components and JSX */}
      <div className="container">
        <h1 className='text-center my-5'>Find Organizers</h1>
      </div>
      <Categorieslist />
      <div className="container">
        <h4 className='text-center'><b>{props.title}</b></h4>
      </div>
      <div className="container" style={{ fontFamily: "sans-serif" }}>

        <div className="row my-3">
          {organizers.map(organizer => (



            organizer.category === props.category ?

              // <div key={organizer._id} className="col my-2">
              <div className="col-sm-4 w-36 card my-3 mx-3" style={{ width: "18rem" }}>
                {
                  organizer.image ?
                    <img className="card-img-top h-40" src={API_BASE_URL + `/${organizer.image}`} alt="event" />
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
              // {/* </div> */}

              : ""



          ))}
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
          <Button variant='secondary' onClick={handleCloseProfileModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default MyFilter;


