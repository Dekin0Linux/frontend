import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import SingleQuarantine from './SingleQuarantine';
import Table from 'react-bootstrap/Table';
import quarantineStore from '../../stores/quarantineStore';

const Quarantines = () => {
  const store = quarantineStore();
  const [currentPage, setCurrentPage] = useState(1);
  const quarantines = store.quarantines || [];
  const itemsPerPage = 7;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = quarantines.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(quarantines.length / itemsPerPage);
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
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>CONDITION</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>OUTCOME</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return (
              <SingleQuarantine index={newIndex} item={item} key={item._id} />
            );
          })}
        </tbody>
      </Table>{' '}
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

export default Quarantines;
