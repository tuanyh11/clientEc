import React from 'react';
import statusCart from '../assets/jsonData/statusCart.json';
import Statuscart from '../components/Statuscart/Statuscart';
import Chart from 'react-apexcharts';
import Table from '../components/Table/Table';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge/Badge';

const Dashboard = () => {
  const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#29b960'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
  }

  const topCustomers = {
    head: [
      'user',
      'total orders',
      'total spending'
    ],
    body: [
      {
        "username": "john doe",
        "order": "490",
        "price": "$15,870"
      },
      {
        "username": "frank iva",
        "order": "250",
        "price": "$12,251"
      },
      {
        "username": "anthony baker",
        "order": "120",
        "price": "$10,840"
      },
      {
        "username": "frank iva",
        "order": "110",
        "price": "$9,251"
      },
      {
        "username": "anthony baker",
        "order": "80",
        "price": "$8,840"
      },
      {
        "username": "anthony baker",
        "order": "80",
        "price": "$8,840"
      },
    ]
  }

  const latestOrders = {
    head: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        },
        {
          id: "#OD1713",
          user: "anthony baker",
          date: "27 Jun 2021",
          price: "$200",
          status: "refund"
        },
        
    ]
  };

  const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
  }

  const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
  );

  const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
  )

  const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
  )

  const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
        <Badge type={orderStatus[item.status] } content={item.status}></Badge>
      </td>
    </tr>
  )

  return (
    <div>
      <h2 className="pageHeader">
        Dashboard
      </h2>
      <div className="row">
          <div className="col-12">
              <div className="row">
                      {
                        statusCart.map((item, index)=> (
                          <div className="col-3" key={index}>
                            <Statuscart
                              icon={item.icon}
                              count={item.count}
                              title={item.title}
                            />
                          </div>
                        ))
                      }
              </div>
          </div>
          <div className="col-12" style={{marginBottom: "2.5rem"}}>
              <div className="card fullHeight">
                  <Chart 
                    type='line'
                    options={chartOptions.options}
                    series={chartOptions.series}
                    height="100%"
                  />
              </div>
          </div>
          <div className="col-5">
            <div className="card hardHieght">
              <div className="cardHeader">
                  <h3>top customers</h3>
              </div>
              <div className="cardBody">
                  <Table
                      headData={topCustomers.head}
                      renderHead={(item, index) => renderCustomerHead(item, index)}
                      bodyData={topCustomers.body}
                      renderBody={(item, index) => renderCustomerBody(item, index)}
                  />
              </div>
              <div className="cardFooter">
                <Link to="/">View All</Link>
              </div>
            </div>
          </div>
          <div className="col-7">
                <div className="card hardHieght">
                    <div className="cardHeader ">
                        <h3>latest Orders</h3>
                    </div>
                    <div className="cardBody">
                        <Table
                            headData={latestOrders.head}
                            renderHead={(item, index) => renderOrderHead(item, index)}
                            bodyData={latestOrders.body}
                            renderBody={(item, index) => renderOrderBody(item, index)}
                        />
                    </div>
                    <div className="cardFooter">
                      <Link to="/">View All</Link>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Dashboard