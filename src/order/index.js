import React from 'react'
import './Order.css';
import { tableConstant } from './tableConstant';
import Table from '../components/table';
import useGetData from '../hooks/useGetData';
import {DataUnAvailable} from '../components/not-available';

export default function Order() {

    const{response, isLoading} = useGetData("order");


    return (
        response.data && response.data > 0 ? ( 
            <div className="order">
                <h2>Orders</h2>
                <Table title="All Orders" cols={tableConstant()} data={response} />
            </div>
        ) : (
            <DataUnAvailable name="order" />
        )
    )
}

