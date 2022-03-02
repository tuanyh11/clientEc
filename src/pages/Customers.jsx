import React from 'react';
import Table from '../components/Table/Table';
import customersList from '../assets/jsonData/customers.json';
import { Link } from 'react-router-dom';

const Customers = () => {
  const customerTableHead = [
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location',
    'action'
  ];

  const renderHead = (item, index) => (<th key={index}>{item}</th>)
  
  const renderBody = (item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.totalOrders}</td>
        <td>{item.totalSpend}</td>
        <td>{item.location}</td>
        <td>
          <Link to="/" className='action'>
            <button >
              <i className='bx bx-edit'></i>
            </button>
          </Link>
          <Link to="/" className='action'>
            <button >
              <i className='bx bx-trash'></i>
            </button>
          </Link>
        </td>
      </tr>
  )

  return (
    <div className="customers">
      <h2 className="pageHeader">
        Customers
      </h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="cardBody">
              <Table
                limit='10'
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customersList}
                renderBody={(item, index) => renderBody(item, index)}
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers