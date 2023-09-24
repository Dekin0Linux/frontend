import React, { useEffect } from 'react';
import animalStore from '../stores/store';
import Animals from '../contents/animal/Animals';
import AddAnimal from '../contents/animal/AddAnimal';
import '../contents/animal/animal.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const AnimalTable = () => {
  const store = animalStore();

  useEffect(() => {
    store.getAnimals();
  }, [store]);

  return (
    <>
      <Navbar
        className="headers"
        style={{ backgroundColor: 'rgb(14, 73, 60)' }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="title">Animal Records</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <AddAnimal />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <div>
            <Animals />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AnimalTable;
