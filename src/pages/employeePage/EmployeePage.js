import React, { useEffect } from 'react';
import AddEmployee from '../../contents/employees/AddEmployee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Employees from '../../contents/employees/EmployeeList';
import employeeStore from '../../stores/employeeStore';

const EmployeePage = () => {
  const store = employeeStore();
  useEffect(() => {
    store.getEmployees();
  }, [store]);
  return (
    <div>
      <header className="App-header">
        <Navbar style={{ backgroundColor: 'rgb(14, 73, 60)' }}>
          <Container>
            <Navbar.Brand>
              <h1 className="title">Employee Records</h1>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <AddEmployee />
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Container style={{ marginTop: '10px' }}>
        <Row>
          <Col md={12}>
            <Employees />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmployeePage;
