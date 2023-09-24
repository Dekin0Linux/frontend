import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import SingleEmployee from './SingleEmployee';
import Table from 'react-bootstrap/Table';
import employeeStore from '../../stores/employeeStore';

const Employees = () => {
  const store = employeeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const employees = store.employees || [];
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = employees.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(employees.length / itemsPerPage);
  const numbers = [...Array(noPages).keys()].map((item) => item + 1);

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== noPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>DEPARTMENT</th>
            <th>NUMBER</th>
            <th>SALARY(GHC)</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return (
              <SingleEmployee index={newIndex} item={item} key={item._id} />
            );
          })}
        </tbody>
      </Table>
      <div className="flex">
        <Pagination>
          <Pagination.Item>
            <a href="#" onClick={prevPage} style={{ color: 'black' }}>
              Prev
            </a>
          </Pagination.Item>
          {numbers.map((item) => (
            <Pagination.Item
              key={item}
              className={`${currentPage === item ? 'activePage' : ''}`}
            >
              <a
                href="#"
                onClick={() => changePage(item)}
                style={{ color: 'black' }}
              >
                {item}
              </a>
            </Pagination.Item>
          ))}
          <Pagination.Item>
            <a href="#" onClick={nextPage} style={{ color: 'black' }}>
              Next
            </a>
          </Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default Employees;
