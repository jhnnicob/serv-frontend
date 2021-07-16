import React from 'react';
import './Unit.css';
import { tableConstant } from './tableConstant';
import Table from '../components/table';
import useGetData from '../hooks/useGetData';
import {DataUnAvailable} from '../components/not-available';

export default function Unit() {

    const {response, isLoading} = useGetData("unit");

    return (
        response.data && response.data.length > 0 ? (
            <div className="unit">
                <h2>Units</h2>
                <Table cols={tableConstant()} data={response.data}/>
            </div>
        ) : (
            <DataUnAvailable name="product"/>
        )
    );
}
