import React, { useEffect, useState } from 'react';
import './CombineAtt.css';
import Table from '../Table/Table';

const CombineAtt = (props) => {
    const [combineData, setCombineData] = useState([]);
    useEffect(() => {
        let initData = [];

        for (let index = 0; index < props.attValue.length; index++) {
            if(props.attValue.length === 1) {
                props.attValue[index].values.forEach(item => {
                    initData.push({
                        name: `${item}`
                    });
                })
            } 
            if(props.attValue.length === 2 && index < 1) {
                for (let i = 0; i < props.attValue[index].values.length; i++) {
                    for (let j = 0; j < props.attValue[index + 1].values.length; j++) {
                        initData.push({
                            name: `${props.attValue[index].values[i]}-${props.attValue[index + 1].values[j]}`
                            })
                    }
                }
            }
        }
        setCombineData([...initData]);
    }, [props.attValue.length])

    console.log(combineData)

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
            <td>{item.name}</td>
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
        console.log(data)
        setCombineData([...data]);
    }

  return (
    <div>
        <form action="" className="row">
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
                <button className="mainButton">Create</button>
            </div>
        </form>
    </div>
  )
}

export default CombineAtt