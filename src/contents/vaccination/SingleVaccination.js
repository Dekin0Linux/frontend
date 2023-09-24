import React, { useState } from 'react';
import vaccinationStore from '../../stores/vaccinationStore';
import EditVaccination from './EditVaccination';
import Modal from 'react-bootstrap/Modal';

const SingleVaccination = ({ item, index }) => {
  const store = vaccinationStore((store) => {
    return {
      editVaccination: store.editVaccination,
      deleteVaccination: store.deleteVaccination,
      handleUpdateVaccination: store.handleUpdateVaccination,
      updateVaccination: store.updateVaccination,
      updateFormVaccination: store.updateFormVaccination,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editVaccination(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.medication}</td>
        <td>{item.date}</td>
        <td>{item.nextDate}</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteVaccination(item._id)} // Updated method name
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditVaccination
            updateVaccination={store.updateVaccination}
            handleUpdateVaccination={store.handleUpdateVaccination}
            updateFormVaccination={store.updateFormVaccination}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleVaccination;
