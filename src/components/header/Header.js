import React, { useEffect, useState } from 'react'
import './Header.css';

import { useLocation} from 'react-router-dom';

export function Header({ routes }) {

    let location = useLocation();
    const [title, setTitle] = useState('')
    const [isOPen, setIsOpen] = useState(false);

    useEffect(() => {
        routes.map((route, index) => {
            location.pathname === route.path && setTitle(route.title)
        })
    }, [title, location]);

    return (
        <div className="header">
            <div className="header__search">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <input type="text" name="search" placeholder="Search"/>
            </div>
            <div  className="header__userInfo">
                <span>
                    Nico Molon
                </span>
                <button onClick={()=>setIsOpen(!isOPen)}>
                    <div className="avatar">
                        <img src="" />
                        <span className="avatar__placeholder">
                            NM
                        </span>
                    </div>
                </button>
                <nav className={`dropdown ${!isOPen ? "dropdown__close" : "dropdown__open"}`}>
                    <span onClick={()=> {
                        localStorage.clear();
                        window.location.href = "./login";
                    }}>Sign out</span>
                </nav>
            </div>
        </div>
    )
}

