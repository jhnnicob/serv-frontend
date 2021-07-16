import React,{useState} from 'react';
import './Table.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function Table({cols, data, withPagination}) {
        const dataCount =  data && data.length;
        const [perPage, setPerPage] = useState(10);
        const [pageStartAt, setPageStartAt] = useState(0);
        const [pageEndAt, setPageEndAt] = useState(10);
        let newData = [];
        if(pageStartAt < 1) {
                newData = data && data.slice(pageStartAt, perPage); 
        }else {
                console.log("Start with ", pageStartAt);
                console.log("End With ", pageEndAt)
                newData = data && data.slice(pageStartAt, pageEndAt); 
        }
        let newDataCount = newData && newData.length;
        let next = newDataCount;

        const handleChange = (e) => {
                setPerPage(e.target.value);
        }
        
        const nextPage = () => {
                let NumberOfPage = data.length / perPage;
        }

        return (
        <div className="table__container">
                <table>
                        <thead>
                                <tr>
                                {
                                        cols &&
                                        cols.map((item, index) => (
                                                <th key={index}>{item.title}</th>
                                        ))
                                }
                                </tr>
                        </thead>
                        <tbody>
                        { newData && newData.map((item, index) => (
                                <tr key={index}>
                                        {
                                        cols.map((col, key) => (
                                                <td key={key}>{col.render(item)}</td>
                                        ))
                                        }
                                </tr>
                        ))     
                        }
                        </tbody>
                </table>
                {withPagination && 
                <Pagination 
                        perPage={perPage}
                        withPagination={true} 
                        handleChange={handleChange} 
                        dataCount={dataCount} 
                        newDataCount={newDataCount} 
                        nextPage={nextPage}/> }
        </div>
        )
}

function Pagination({perPage, handleChange, dataCount, newDataCount, nextPage}) {
        return (
                <div className="pagination">
                        Rows per page: 
                                <select value={perPage} onChange={handleChange}>
                                        {
                                                [10, 20, 30, 40, 50, 60, 70, 80, 100].map(pageSize => (
                                                        <option key={pageSize}
                                                                value={pageSize}>
                                                                {pageSize}
                                                        </option>
                                                ))
                                        }
                                </select>
                        1-{newDataCount} of {dataCount} 
                        <button>
                                <NavigateBeforeIcon />
                        </button>
                        <button onClick={nextPage}>
                                <NavigateNextIcon />
                        </button>
                                
                </div>
        )
}