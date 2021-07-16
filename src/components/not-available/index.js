import React from 'react';
import './DataUnAvailable.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export function DataUnAvailable({name}) {
    return (
        <div className="data__unavailable">
            <div>
                <div className="data__unavailable__icon"><ShoppingBasketIcon /></div>
                <span>No {name} available</span>
            </div>
        </div>
    )
}