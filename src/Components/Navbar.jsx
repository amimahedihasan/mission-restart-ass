import React, { useEffect, useState } from 'react';
import { FaGithub, FaSquareGithub } from 'react-icons/fa6';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';


const Navbar = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer)
    }, [location])

    // const location = useLocation();
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 300);

    //     return () => clearTimeout(timer);
    // }, [location]);

    return (
        <>
            {loading && <LoadingSpinner />}
            <div className="navbar bg-base-100 shadow-sm md:px-[80px] lg:px-[80px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/" end className={({ isActive }) => isActive ? 'active font-bold text-purple-600' : ''}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/apps" className={({ isActive }) => isActive ? 'active font-bold text-purple-600' : ''}>
                                    Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/installation" className={({ isActive }) => isActive ? 'active font-bold text-purple-600' : ''}>
                                    Installation
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="text-xl text-[#9F62F2] flex items-center"><span>
                        <img className='w-[40px] h-[40px]' src="https://i.ibb.co.com/s9cTWgYJ/logo.png" alt="" /></span>HERO.IO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/" end className={({ isActive }) => isActive ? 'active font-bold text-purple-600' : ''}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/apps" className={({ isActive }) => isActive ? 'active font-bold text-purple-600' : ''}>
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/installation" className={({ isActive }) => isActive ? 'active font-bold text-purple-600' : ''}>
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
                        href="https://github.com/amimahedihasan" target="_blank"><FaGithub />Contribute</a>
                </div>
            </div>
        </>
    );
};


export default Navbar;