import React from 'react'

export const tableConstant = () => {
    return [
        {
            title: 'Username',
            render: rowData => {
                return <span>{rowData.username}</span>
            }
        },
        {
            title: 'Email',
            render: rowData => {
                return <span>{rowData.email}</span>
            }
        }
    ]
}
