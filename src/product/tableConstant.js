import React from 'react'

export const tableConstant = () => {
    return [
        // {
        //     title: '',
        //     withCheckbox: true
        // },
        {
            title: 'Name',
            render: rowData => {
                return <span>{rowData.name}</span>
            }
        },
        {
            title: 'Description',
            render: rowData => {
                return <span>{rowData.description}</span>
            }
        },
        {
            title: 'Base Price',
            render: rowData => {
                return <span>{rowData.basePrice}</span>
            }
        },
        {
            title: 'Active',
            render: rowData => {
                return (
                    <>
                        {
                            rowData.active ? (
                                <span 
                                    style={{background: "green", color: "#fff", padding: "5px", borderRadius: "10px", fontSize: "12px"}}>
                                    Yes
                                </span>
                            ):(
                                <span
                                    style={{background: "red", color: "#fff", padding: "5px", borderRadius: "10px", fontSize: "12px"}}>
                                    No
                                </span>)
                        }
                    </>
                )
            }
        },
        // {
        //     title: '',
        //     withAction: true
        // },
    ]
}
