import React, { useEffect } from 'react';
import AddInvoice from '../../contents/invoice/AddInvoice';
import Invoices from '../../contents/invoice/Invoices';
import invoiceStore from '../../stores/invoiceStore';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const InvoicePage = () => {
  const store = invoiceStore();

  useEffect(() => {
    store.getInvoices();
  }, [store]);

  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="title">Invoices</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <AddInvoice />
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <div>
            <Invoices />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default InvoicePage;
