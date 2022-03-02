import React, {useEffect, useState} from 'react'
import Table from '../../components/Table/Table';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function VariantCombine() {
    const {id} = useParams();
    const [dataForm, setDataForm] = useState();
    const getItems = async() => {
        try {
            const result = await axios.get(`http://localhost:5000/api/attribute/${id}`);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        
    }, [id])
  return (
    <div className="variantCombine">
        <h2 className="pageHeader">Variant Combine</h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <form action="">
                        <Table

                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VariantCombine