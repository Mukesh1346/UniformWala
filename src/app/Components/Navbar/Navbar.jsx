                 "use client"
import React, { useState } from 'react';
import { IoLogoTwitter, IoCartOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import './navbar.css'
import logo from '@/Assets/Images/logo.jpg'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItems = [
        { title: "Products", subMenu: ["Shirts", "Pants", "Jackets"] },
        { title: "Services", subMenu: ["Consulting", "Design", "Customization"] },
        { title: "Categories", subMenu: ["Men", "Women", "Kids"] },
        { title: "Brands", subMenu: ["Nike", "Adidas", "Puma"] },
        { title: "Uniforms", subMenu: ["School", "Corporate", "Hospital"] },
        { title: "Accessories", subMenu: ["Bags", "Belt", "Cap"] },
        { title: "Industries", subMenu: ["Hotel", "IT", "Healthcare"] },
        { title: "Offers", subMenu: ["New", "Discount", "Clearance"] }
    ];

    return (
        <>
            {/* ----------- Top Navbar ----------- */}
            <nav className='TopNavbarContainer'>
                <div className="TopNavbar">
                    <div className='TopNavLeftSec'>
                        <p className='navtext'>Talk to Uniform Consultant </p>
                        <div className='d-flex align-items-center'>
                            <IoLogoTwitter className='fs-4 ms-2' />
                            <a href="tel:+919876543210" className="text-decoration-none text-dark ms-2 navtext">
                                +91 9218 008 549 |
                            </a>
                            <p className='ms-3 navtext'>Mon - Sat (10:30 AM to 5:30 PM) |</p>
                        </div>
                        <div className='ms-3 '>
                            <p className='navtext'>ISO 9001:2015 Certified Company</p>
                        </div>
                    </div>

                    <div className="TopNavRightSec">
                        <button className='PayOnlineBtn '>Pay Online</button>
                        <ul className='list-unstyled PagesSection d-flex'>
                            <li className='list-group-item me-3'>About </li> |
                            <li className='list-group-item me-3'>Contact</li>|
                            <li className='list-group-item me-3'>Blog</li>|
                            <li className='list-group-item me-3'>FAQ</li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ----------- Bottom Navbar ----------- */}
            <div className="BottomNavbar">
                <div className="BottomNavLeft">
                    <Link href="/"> <Image src={logo} alt="Logo" className="navbar-logo" />
                    </Link>
                </div>

                {/* Hamburger icon for mobile */}
                <div className="mobileMenuIcon" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
                </div>

                <div className={`BottomNavMid ${mobileMenu ? "show-mobile-menu" : ""}`}>
                    <ul className="list-unstyled d-flex dropdown-section flex-wrap">
                        {menuItems.map((menu, idx) => (
                            <li className="dropdown bottomNavDropdown" key={idx}>
                                {menu.title} ▾
                                <ul className="dropdown-menu">
                                    {menu.subMenu.map((sub, subIdx) => (
                                        <li key={subIdx}>{sub}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="BottomNavRight">
                    <IoSearchOutline className="nav-icon me-3" />
                    <IoPersonOutline className="nav-icon me-3" />
                    <IoHeartOutline className="nav-icon me-3" />
                    <IoCartOutline className="nav-icon" />
                </div>
            </div>
        </>
    )
}
