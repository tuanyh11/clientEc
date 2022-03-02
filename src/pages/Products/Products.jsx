import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
        <h2 className=" pageHeader">
          Products
        </h2>
        <Link to="/createproduct" className="pageHeader newItem">
          <button >New Product</button>
        </Link>
        <div className="row">
          <div className="col-12">
            <div className="card">
            </div>
          </div>
        </div>
    </div>
  )
}

export default Products