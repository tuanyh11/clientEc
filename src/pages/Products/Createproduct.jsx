import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Form from '../../components/Form/Form';
import {Link} from 'react-router-dom';
import './Product.css'
import Table from '../../components/Table/Table';
import Select from 'react-select';
import Attributes from './Attributes';

const Createproduct = () => {
  const [infoProduct, setInfoProduct] = useState({});

  const [id, setId] = useState();

  const [category, setCategory] = useState([]);

  const inputs = [
    {
      name: 'nameproduct',
      type: 'text',
      placeholder: 'Name product',
      titleInput: 'name product'
    },
    {
      name: 'discriton',
      type: 'text',
      placeholder: 'discriton',
      titleInput: 'discriton'
    },
    {
      name: 'image',
      type: 'file',
      placeholder: 'image',
      titleInput: 'image'
    },
    {
      name: 'categoryId',
      titleInput: 'category'
    },
    {
      name: 'price',
      type: 'number',
      placeholder: 'price',
      titleInput: 'price'
    },
    {
      name: 'material',
      type: 'text',
      placeholder: 'material',
      titleInput: 'material'
    },
    {
      name: 'brand',
      type: 'text',
      placeholder: 'brand',
      titleInput: 'brand'
    },
    {
      name: 'unit',
      type: 'text',
      placeholder: 'unit',
      titleInput: 'unit'
    },
    {
      name: 'origin',
      type: 'text',
      placeholder: 'origin',
      titleInput: 'origin'
    },
    {
      name: 'quantity',
      type: 'text',
      placeholder: 'quantity',
      titleInput: 'quantity'
    }
  ]

  const hanleInput = (e) => { 
    const {value, name,  files} = e.target;
    if(name === 'image') {
      const file = files[0];
      setInfoProduct({...infoProduct, [name]: file}); 
    } else {
      setInfoProduct({...infoProduct, [name]: value});
    }
  }

  const renderInput = (item, index) => {
    if(item.name === 'categoryId') {
      return (
        <div className="group" key={index}>
          <span>{item.titleInput}</span>
            {category?.length > 0 ? (
              <select onChange={hanleInput} name={item.name}>
                {category.map((item, index) => (<option key={index} value={item.id}>{item.name}</option>))}
              </select>
            ): ''}
        </div>
      )
    } else {
      return (
        <div className="group" key={index}>
          <span>{item.titleInput}</span>
          <input type={item.type} onChange={hanleInput} name={item.name}/>
          {item.button ? (
            <button>{item.button}</button>
          ): ''}
        </div>
      )
    }
  }

  const renderButtonSubmit = () => <button type='submit'>Create</button>

  const renderNavigation = () => id && <Link to={`/attributes/${id}`}><button>If you have product variant click here</button></Link>

  // submit product
  const hanleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(infoProduct)

    for (const key in infoProduct) {
      formData.append(key, infoProduct[key]);
    }
    try {
      const res =  await axios.post(`http://localhost:5000/api/product/`, formData);
      if(Object.keys(res.data).length > 0) {
        setId(res.data.id)
        setInfoProduct({})
      };
    } catch (error) {
      console.log(error);
    }
  }

  // get category
  
  const getCategory = async() => {
    try {
      const result = await axios.get('http://localhost:5000/api/category/');
      if(result.status === 200) {
        setCategory([...result.data.result]);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategory();
  }, [])

  return (
    <div className="createproduct">
        <h2 className=" pageHeader">
          new Products
        </h2>
        <div className="row">
            <div className="newProductInfo col-12">
                <div className="card">
                    <Form
                      dataForm={inputs}
                      renderInput={(item, index) => renderInput(item, index)}
                      hanleSubmit={hanleSubmit}
                      renderButtonSubmit={renderButtonSubmit}
                      renderNavigation={renderNavigation}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Createproduct