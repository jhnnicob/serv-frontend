import React from 'react';
import './Dashboard.css';
import chart from '../icons/chart.svg';
import Table from '../components/table';
import useGetData from '../hooks/useGetData';
import { Link } from 'react-router-dom';
import { tableConstant } from './tableConstant';

export function Dashboard() {
   
    const{response, isLoading} = useGetData("order");

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <h2>Today</h2>
            <div className="dashboard__row">
                <img src={chart} />
            </div>
            <div className="dashboard__table">
                <h2>Recent Orders</h2>
                <Table cols={tableConstant()} data={response.data} withPagination={false}/>
                <div className="dashboad__seeMore">
                    <Link to="/order" color="primary" href="#" >
                        See more orders
                    </Link>
                </div>
            </div>
        </div>
    )
}