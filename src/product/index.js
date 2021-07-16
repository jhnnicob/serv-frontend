import React from 'react';
import './Product.css';
import Table from '../components/table';
import { tableConstant } from './tableConstant';
import { DataUnAvailable } from "../components/not-available";
import useGetData from '../hooks/useGetData';

export default function Product() {

    const {response, isLoading} = useGetData("product");

    return (
        response.data && response.data.length? (
            <div className="product">
                <h2>Products</h2>
                <Table cols={tableConstant()} data={response.data} withPagination={true}/>
            </div>
        ) : (
            <DataUnAvailable name="Product"/>
        )

    )
}
