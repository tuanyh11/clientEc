import React, { useEffect, useState } from 'react';
import './Table.css'

const Table = (props) => {
    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)): props.bodyData;
    
    const [dataShow, setDataShow] = useState(initDataShow);
    useEffect(() => {
        if(!(props.limit && props.bodyData)) setDataShow(props.bodyData);
    }, [props.bodyData])
    
    let pages = 1;
    
    let range = [];
    
    if(props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()];
    }
    
    const [currPage, setCurrPage] = useState(0);
    
    const selectPage = page => {
        const start = Number(props.limit) * page;
        const end = start + Number(props.limit);
        setDataShow(props.bodyData.slice(start, end));
        setCurrPage(page);
    }   
  return (
    <div className='tableWrapper tableWrapperSroll'>
        <table>
            { props.headData && props.renderHead ? 
                (
                    <thead>
                        <tr>
                            {
                                props.headData.map((item, index) => props.renderHead(item, index))
                            }
                        </tr>
                    </thead>
                ): null
            }
            { props.bodyData && props.renderBody ? 
                (
                    <tbody>
                        {
                            
                           dataShow.length > 0 ? dataShow.map((item, index) => props.renderBody(item, index)): null
                        }
                    </tbody>
                ): null
            }
        </table>
        {
            pages > 1 ? (
                <div className="tablePagination">
                    {
                        range.map((item, index) => (
                            <div key={index} className={`tablePaginationItem ${currPage === index ? 'active': ''}`} onClick={() => selectPage(index)}>{item + 1}</div>
                        ))
                    }
                </div>
            ) : null
        }
    </div>
  )
}

export default Table