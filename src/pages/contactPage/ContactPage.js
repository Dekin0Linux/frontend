import React, { useEffect } from 'react';
import AddContact from '../../contents/contacts/AddContact';
import Contacts from '../../contents/contacts/Contacts';
import contactStore from '../../stores/contactStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const ContactPage = () => {
  const store = contactStore();

  useEffect(() => {
    store.getContacts();
  }, [store]);
  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Contacts</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddContact />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <div>
            <Contacts />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
