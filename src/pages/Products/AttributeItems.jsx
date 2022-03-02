import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';

const AttributeItems = () => {
    const {id} = useParams();
    const [attData, setAttData] = useState({
        variantId: id
    });

    const [attValue, setAttValue] = useState([]);


    const dataForm = {
        input: [
            {
                titleInput: 'name',
                name: 'name',
                placeholder: 'type in here',
                value: ''
            }
        ],
        button: {
            name: "add color"
        }
    };


    const [inputData, setInputDadta] = useState(dataForm);

    const setValueForm = (e, index) => {
        const {value, name} = e.target;
        setAttData({...attData, [name]: value});
        const inputs = inputData.input.filter((item, id) => id !== index);
        setInputDadta({...inputData, input: [...inputs, {...inputData.input[index], value: value}]});
    }

    const attributeHead = [
        'name',
        'actions'
    ];


    const renderInput = (item, index) => (
        <div className="group" key={index}>
            <span>{item.titleInput}</span>
            <input type="text" name={item.name} placeholder={item.placeholder} value={item.value}  onChange={(e) => setValueForm(e, index)}/>
        </div>
    )

    const hanleSubmit = (e) => {
        e.preventDefault()
        setAttValue([...attValue, attData])
    }

    const renderHead = (item, index) => (<th key={index}>{item}</th>);

    // const hanleIditItem = (index) => {
    //     const value = attValue.filter((item, id) => id == index);
    //     setInputDadta({...inputData, input: [...value, {...inputData.input[index], value: inputData.input[index].value}]});
    //     console.log(setInputDadta)
    // }

    const renderBody =(item, index) => (
        <tr key={index}>
            <td>{item.name}</td>
            <td className="flex-wrap">
                <div className="action" >
                    <button>
                        <i className='bx bx-edit'></i>
                    </button>
                </div>
                <div className="action">
                    <button >
                        <i className='bx bx-trash'></i>
                    </button>    
                </div>       
            </td>
        </tr>
    )



  return (
    <div>
        <h2 className="pageHeader">
            Attributes
        </h2>
        <div className="row">
            <div className="col-6">
                <h3 className="title">
                    Add new color
                </h3>
                <p className='discription'>
                    thuộc tính là một đặc tả định nghĩa đặc tính của một đối tượng, phần tử, hay tập tin. Nó còn có thể chỉ đến giá trị cho một thực thể cụ thể
                </p>
                <Form
                        dataForm={inputData}
                        renderInput={(item, index) => renderInput(item, index)}
                        hanleSubmit={hanleSubmit}
                />
            </div>
            <div className="col-6">
                <div className="card">
                    <Table
                        headData={attributeHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={attValue}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default AttributeItems