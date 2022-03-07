import React, { useEffect, useState } from 'react';
import './CombineAtt.css';
import Table from '../Table/Table';
import axios from 'axios';

const CombineAtt = (props) => {
    const [combineData, setCombineData] = useState([]);
    useEffect(() => { 
        const combine = props.attValue.length > 0 ? props.attValue.map((item, index) => item.values).reduce((a, b) => a.reduce((c, d) => c.concat(b.map((e) => [].concat(d, e))), [])): [];
        const data = combine.map((item, index) => Array.isArray(item) ? item.join('-'): item).map(element => {
            return {value: element}
        });
        setCombineData([...data]);
    }, [props.attValue.length]);

    const handleInputCombine = (e, index) => {
        const data = combineData.map((item, id) => {
            if(index === id && e.target.type === 'file') {
                combineData[index][e.target.name] = e.target.files[0];
                return combineData[index];
            } else {
                if(index === id) {
                    combineData[index][e.target.name] = e.target.value;
                    return combineData[index];
                }
            }
            return combineData[id];
        })
        setCombineData([...data]);
        console.log(combineData)
    }

    const headData = ['variant', 'price', 'quantity', 'image']

    const renderHead = (item, index) => (<th key={index}>{item}</th>);

    const renderBody = (item, index) => (
        <tr key={index}>
            <td>
                {item.value}
            </td>
            <td>
                <input type="text" name="price" id="" value={item.price ? item.price: ''}  onChange={(e) => handleInputCombine(e, index)}/>
            </td>
            <td>
                <input type="text" name="quantity" id="" value={item.quantity ? item.quantity: ''}  onChange={(e) => handleInputCombine(e, index)}/>
            </td>
            <td>
                <input type="file" name="image" id=""  onChange={(e) => handleInputCombine(e, index)}/>
            </td>
        </tr>
    )
      
    const buttonAllSame = () => {
        const data = combineData.map((item, index) => {
            item.price = combineData[0].price;
            item.quantity = combineData[0].quantity;
            return item;
        });
        setCombineData([...data]);
    }

    // submit

    const submitData = () => {
        // axios.post('')
    }

  return (
    <div>
        <div className="row">
            <div className="col-12 " >
                <button className="mainButton" type="button" onClick={() => buttonAllSame()}>All the same</button>
            </div>
            <div className="col-12 combineOption">
                <Table
                    headData={headData}
                    renderHead={renderHead}
                    bodyData={combineData}
                    renderBody={renderBody}
                />
                <button className="mainButton" onClick={submitData}>Create</button>
            </div>
        </div>
    </div>
  )
}

export default CombineAtt