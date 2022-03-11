import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';
import './Category.css'

const Category = () => {
    const [category, setCategory] = useState({name: ''});
    const [isSubmit, setIsSubmit] = useState(true);
    const [showCategory, setShowCategory] = useState([]);
    const inputs = [
        {
            name: 'name',
            titleInput: 'category',
            placeholder: 'type in here',
        }
    ]

    const hanleInput = (e) => {
        setCategory({...category, [e.target.name]: e.target.value});
    }

    const renderInput = (item, index) => (
        <div className="group" key={index}>
            <span>{item.titleInput}</span>
            <input type="text" value={category.name ? category.name: ''} name={item.name} placeholder={item.placeholder} onChange={hanleInput}/>
        </div>
    )

    const renderButton = () => (<button type="submit">{isSubmit? 'Create': 'Edit'}</button>)
    
    const hanleSubmit = async(e) => {
        e.preventDefault()
        try {
           if(isSubmit) {
                const result = await axios.post('http://localhost:5000/api/category/', category);
                if(result.status === 200) {
                    setShowCategory([...showCategory, result.data.result]);
                    setCategory({});
                };
           } else {
                const result = await axios.patch(`http://localhost:5000/api/category/${category.id}`, category);
                if(result.status === 200) {
                    setShowCategory([...showCategory.map((item, index) => item.id !== category.id ? item : result.data.result)]);
                    console.log(showCategory)
                    setCategory({});
                    setIsSubmit(true);
                };
           }
        } catch (error) {
            console.log(error);
        }
    }
    const getCategories = async () => {
        try {
            const result = await axios.get('http://localhost:5000/api/category/');
            if(result.status === 200) {
                setShowCategory([...result.data.result]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCategories();
    }, [])

    // table config

    const headData = ['name', 'created at', 'updated at', 'action']

    const renderHead = (item, index) => (<th key={index}>{item}</th>)

    // button click 

    const hanleEditClick = (item) => {
        setIsSubmit(false);
        setCategory({name: item.name, id: item.id});
    }

    const hanleDeleteItem = async(item) => {
        const result = await axios.delete(`http://localhost:5000/api/category/${item.id}`);
        if(result.status === 200) {
            setShowCategory([...showCategory.filter((category) => category.id !== item.id)]);
        }
    } 

    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{item.name}</td>
            <td>{item.createdAt}</td>
            <td>{item.updatedAt}</td>
            <td style={{display: 'flex', alignItems: 'center'}}>
                <div className='action'>
                    <button onClick={() => hanleEditClick(item)}>
                    <i className='bx bx-edit'></i>
                    </button>
                </div>
                <div className='action'>
                    <button onClick={() => hanleDeleteItem(item)}>
                    <i className='bx bx-trash'></i>
                    </button>
                </div>
            </td>
        </tr>
    )

  return (
    <div className="category">
        <h2 className="pageHeader">
            Attributes
        </h2>
        <div className="row">
            <div className="col-4">
                <div className="card widthSame">
                    <div className="categoryHead">
                        <h2>Create Category</h2>
                        <p className='discription'>
                            thuộc tính là một đặc tả định nghĩa đặc tính của một đối tượng, phần tử, hay tập tin. Nó còn có thể chỉ đến giá trị cho một thực thể cụ thể
                        </p>
                    </div>
                    <Form
                        dataForm={inputs}
                        renderInput={(item, index) => renderInput(item, index)}
                        renderButton={() => renderButton()}
                        hanleSubmit={hanleSubmit}
                    />
                </div>
            </div>
            <div className="col-8">
                <div className="card widthSame">
                    <Table
                        headData={headData}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={showCategory}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category