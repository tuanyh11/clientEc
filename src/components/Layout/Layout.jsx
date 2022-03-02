import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';
import Topnav from '../Topnav/Topnav';
import Dashboard from '../../pages/Dashboard';
import Customers from '../../pages/Customers';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Products from '../../pages/Products/Products';
import Createproduct from '../../pages/Products/Createproduct';
import Attributes from '../../pages/Products/Attributes';
import AttributeItems from '../../pages/Products/AttributeItems';
import VariantCombine from '../../pages/Products/VariantCombine';
import Category from '../../pages/Category/Category';

const Layout = () => {
  return (
    <BrowserRouter>
        <div className="layout">
            <Sidebar></Sidebar>
            <div className="layoutContent">
                <Topnav/>
                <div className="layoutContentMain ">
                    <Routes>
                        <Route path="/" element={<Dashboard />}></Route>
                        <Route path="customers" element={<Customers/>}></Route>
                        <Route path="products" element={<Products/>}></Route>
                        <Route path="createproduct" element={<Createproduct/>}></Route>
                        <Route path="attributes/:productId" element={<Attributes/>}></Route>
                        <Route path="variant/:id" element={<VariantCombine/>}></Route>
                        <Route path="categories" element={<Category/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
        
               
    </BrowserRouter>
  )
}

export default Layout