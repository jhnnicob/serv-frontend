import React from 'react';
import './Sidebar.css';
import SidebarOption from '../sidebar-option';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListIcon from '@material-ui/icons/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SquareFootIcon from '@material-ui/icons/SquareFoot';

const Icon = (path) => {
    if (path === "/dashboard") return DashboardIcon;
    if (path === "/product") return ShoppingBasketIcon;
    if (path === "/order") return ListIcon;
    if (path === "/user") return AccountBoxIcon;
    if (path === "/unit") return SquareFootIcon;
}

export function Sidebar({ routes }) {

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h1>Serv</h1>
            </div>
            {
                routes.map((route, index) => (
                    <SidebarOption
                        key={index}
                        Icon={Icon(route.path)}
                        route={route} />
                ))
            }
        </div>
    )
};

