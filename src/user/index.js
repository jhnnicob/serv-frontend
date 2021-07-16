import React, {Suspense} from 'react'
import './User.css';
import { tableConstant } from './tableConstant';
import useGetData from '../hooks/useGetData';
import { DataUnAvailable } from '../components/not-available';
import Loader from '../components/loader';

const UserTable = React.lazy(() => import('./UserTable'));

export default function User() {

    const {response, isLoading} = useGetData('user');
    return (
        isLoading ? (
            <Loader />
        ) : (
            response.data && response.data.length > 0 ? (
                <div className="user">
                    <Suspense fallback={<div>Loading...</div>}>
                    <UserTable cols={tableConstant()} data={response.data}/>
                    </Suspense>
                </div>
            ) : (
                <DataUnAvailable name="user"/>
            )
        )
    )
}