import React from 'react'

export const tableConstant = () => {
    return [
        // {
        //     title: '',
        //     withCheckbox: true
        // },
       
        {
            title: 'Transaction Date',
            render: rowData => {
                return <span>{rowData.transactionDate}</span>
            }
        },
        {
            title: 'Customer',
            render: rowData => {
                return <span>{rowData.customer}</span>
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
        // {
        //     title: '',
        //     withAction: true
        // },
    ]
}
