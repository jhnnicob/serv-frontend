import React from 'react'

export const tableConstant = () => {
    return [
        {
            title: 'Date',
            render: rowData => {
                return <span>{rowData.date}</span>
            }
        },
        {
            title: 'Customer name',
            render: rowData => {
                return <span>{rowData.name}</span>
            }
        },
        {
            title: 'Agent',
            render: rowData => {
                return <span>{rowData.agent}</span>
            }
        },
        {
            title: 'Company',
            render: rowData => {
                return <span>{rowData.company}</span>
            }
        },
        {
            title: 'Payment Term',
            render: rowData => {
                return <span>{rowData.paymentTerm}</span>
            }
        },
        {
            title: 'Sales  Amount',
            render: rowData => {
                return <span>{rowData.salesAmount}</span>
            }
        },
        
    ]
}
