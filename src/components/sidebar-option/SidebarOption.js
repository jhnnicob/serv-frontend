import React, { useEffect, useState } from 'react';
import './SidebarOption.css';
import { Link, useRouteMatch } from 'react-router-dom';

export function SidebarOption({ Icon, route }) {

    const [subItem, setSubItem] = useState('');
    useEffect(() => {
        {
            route.sub && route.sub.map((item) => {
                setSubItem(item);
            })
        }
    }, [subItem])
    const [active, setActive] = useState(false);
    let matchParentPath = useRouteMatch(route.path);
    let matchChildPath = useRouteMatch(subItem.path);
    useEffect(() => {
        matchParentPath && matchParentPath.path === route.path ? setActive(true) : setActive(false);
    }, [matchParentPath, subItem])

    return (
        <div className="sidebarOption">
            {Icon ?
                (
                    <>
                        <div className={`sidebarOption__parentItem ${active && "sidebarOption__selected"}`}>
                            <Icon className={`sidebarOption__icon ${active && "sidebarOption__icon__selected"}`} />
                            <Link 
                                to={`${route.path}`} >
                                {route.title}
                            </Link>
                        </div>
                        {/* <div className="sidebarOption__subItem">
                            <Link to={`${subItem.path}`}>
                                {subItem.title}
                            </Link>
                        </div> */}
                    </>) : (
                    <div className={`sidebarOption__parentItem ${active && "sidebarOption__selected"}`}>
                        <Link to={`${route.path}`}>
                            {route.title}
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

