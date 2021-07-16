import React, {useState} from 'react';
import './UserTable.css';
import UserForm from './UserForm';
import Table from '../components/table';
import Modal from '../components/modal';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function UserTable({cols, data}) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="usertable">
            <div className="userTable__header">
                <h2>Users</h2>
                <div className="userTable__Modal">
                    <Modal 
                        open={open} 
                        handleOpen={handleOpen}>
                        <UserForm handleOpen={handleOpen} />     
                    </Modal>
                    <div className="userTable__modal__icons">
                        <button onClick={handleOpen}>
                            <PersonAddIcon />
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="userTable__Body">
                <Table cols={cols} data={data} />
            </div>
        </div>
    )
}

export default UserTable;
