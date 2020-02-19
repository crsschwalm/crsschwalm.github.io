import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/css/header.css'

const defaultLinks = [{ link: '/', label: "Home" },
{ link: '/code', label: "My Stats" },
{ link: '/me', label: "About Me" },
{ link: '/connect', label: "Connect" }]

export const Header = ({ links = defaultLinks }) => {
    const [pathName, setPathName] = useState();
    const setPathOnClick = (path) => () => setPathName(path)

    useEffect(() => {
        setPathName(window.location.pathname)
    }, []);

    return (
        <div className='header'>
            {
                links.map(({ link, label }, i) => (
                    <Link
                        key={i}
                        to={link}
                        onClick={setPathOnClick(link)}
                        className={link === pathName ? 'active' : ''}>
                        {label}
                    </Link>
                ))
            }
        </div>
    )
}