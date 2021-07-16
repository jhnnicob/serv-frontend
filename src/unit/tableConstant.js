import React from 'react';

export const tableConstant = () => {
    return [
        {
            title: 'Name',
            render: rowData => {
                return <span>{rowData.name}</span>
            }
        },
        {
            title: 'Symbol',
            render: rowData => {
                return <span>{rowData.symbol}</span>
            }
        }
    ]
}
