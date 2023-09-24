import React, { useState } from 'react';
import profileStore from '../../stores/profileStore';
import EditProfile from './EditProfile';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './profile.scss';
const SingleProfile = ({ item, index }) => {
  const store = profileStore((store) => {
    return {
      editProfile: store.editProfile,
      deleteProfile: store.deleteProfile,
      handleUpdateProfile: store.handleUpdateProfile,
      updateProfile: store.updateProfile,
      updateFormProfile: store.updateFormProfile,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editProfile(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="flex">
      <Row key={item._id} className="profileContainer">
        <Col className="imageContainer">
          <img src={item.logo} alt="Logo" />
        </Col>
        <Col className="detailsContainer font1">
          <h3>Business Name: {item.name}</h3>
          <h3>Email: {item.email}</h3>
          <h3>Number: {item.number1}</h3>
          <h3>Number 2: {item.number2}</h3>
          <Row>
            <Col>
              <h3>Address: </h3>
            </Col>
            <Col>
              <h4>{item.building}</h4>
              <h4>{item.street}</h4>
              <h4>{item.city}</h4>
              <h4>{item.country}</h4>
            </Col>
          </Row>

          <div className="formButtonsContainer">
            <button className="formButtons" onClick={handleOpenModal}>
              Update Profile
            </button>
            <button
              className="formButtons"
              onClick={() => store.deleteProfile(item._id)}
            >
              Delete
            </button>
          </div>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfile
            updateProfile={store.updateProfile}
            handleUpdateProfile={store.handleUpdateProfile}
            updateFormProfile={store.updateFormProfile}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SingleProfile;
