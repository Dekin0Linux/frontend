import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import SingleInventory from './SingleInventory';
import Table from 'react-bootstrap/Table';
import inventoryStore from '../../stores/inventoryStore';

const Inventories = () => {
  const store = inventoryStore();
  const [currentPage, setCurrentPage] = useState(1);
  const inventories = store.inventories || [];
  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const itemsShown = inventories.slice(firstIndex, lastIndex);
  const noPages = Math.ceil(inventories.length / itemsPerPage);
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
            <th>EQUIPMENT</th>
            <th>SERIAL NUMBER</th>
            <th>PURCHASED DATE</th>
            <th>PURCHASE PRICE(GHC)</th>
            <th>SALE PRICE(GHC)</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {itemsShown.map((item, index) => {
            const newIndex = firstIndex + index;
            return (
              <SingleInventory index={newIndex} item={item} key={item._id} />
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

export default Inventories;
