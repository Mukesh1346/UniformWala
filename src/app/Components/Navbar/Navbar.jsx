"use client";
import React, { useState } from "react";
import {
  IoLogoTwitter,
  IoCartOutline,
  IoHeartOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import "./navbar.css";
import logo from "@/Assets/Images/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    {
      title: "Products",
      subMenu: [
        { label: "Shirts", href: "/products" },
        { label: "Pants", href: "/products" },
        { label: "Jackets", href: "/products"},
      ],
    },
    {
      title: "Services",
      subMenu: [
        { label: "Consulting",href: "/products"},
        { label: "Design", href: "/products" },
        { label: "Customization", href: "/products"},
      ],
    },
    {
      title: "Categories",
      subMenu: [
        { label: "Men", href: "/products" },
        { label: "Women", href: "/products" },
        { label: "Kids", href: "/products"},
      ],
    },
    {
      title: "Brands",
      subMenu: [
        { label: "Nike", href: "/products" },
        { label: "Adidas", href: "/products"},
        { label: "Puma", href: "/products"},
      ],
    },
    {
      title: "Uniforms",
      subMenu: [
        { label: "School", href: "/products"},
        { label: "Corporate", href: "/products" },
        { label: "Hospital", href: "/products"},
      ],
    },
    {
      title: "Accessories",
      subMenu: [
        { label: "Bags", href: "/products"},
        { label: "Belt", href: "/products"},
        { label: "Cap", href: "/products" },
      ],
    },
    {
      title: "Industries",
      subMenu: [
        { label: "Hotel", href: "/products"},
        { label: "IT", href: "/products" },
        { label: "Healthcare", href: "/products" },
      ],
    },
    {
      title: "Offers",
      subMenu: [
        { label: "New", href: "/products" },
        { label: "Discount", href: "/products" },
        { label: "Clearance", href: "/products"},
      ],
    },
  ];

  return (
    <>
      {/* ----------- Top Navbar ----------- */}
      <nav className="TopNavbarContainer">
        <div className="TopNavbar">
          <div className="TopNavLeftSec">
            <p className="navtext">Talk to Uniform Consultant </p>
            <div className="d-flex align-items-center">
              <IoLogoTwitter className="fs-4 ms-2" />
              <a
                href="tel:+919876543210"
                className="text-decoration-none text-dark ms-2 navtext"
              >
                +91 9218 008 549 |
              </a>
              <p className="ms-3 navtext">Mon - Sat (10:30 AM to 5:30 PM) |</p>
            </div>
            <div className="ms-3 ">
              <p className="navtext">ISO 9001:2015 Certified Company</p>
            </div>
          </div>

          <div className="TopNavRightSec">
            <button className="PayOnlineBtn ">Pay Online</button>
            <ul className="list-unstyled PagesSection d-flex">
              <li className="list-group-item me-3"><a className="AnchorLink" href="/aboutus">About</a> </li> |
              <li className="list-group-item me-3"><a className="AnchorLink" href="/contactus">Contact</a></li>|
              <li className="list-group-item me-3"><a className="AnchorLink" href="/aboutus">Blog</a></li>|
              <li className="list-group-item me-3"><a className="AnchorLink" href="/aboutus">FAQ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ----------- Bottom Navbar ----------- */}
      <div className="BottomNavbar">
        <div className="BottomNavLeft">
          <Link href="/">
            <Image src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="mobileMenuIcon"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <IoCloseOutline size={28} /> : <IoMenuOutline size={28} />}
        </div>

        <div className={`BottomNavMid ${mobileMenu ? "show-mobile-menu" : ""}`}>
          <ul className="list-unstyled d-flex dropdown-section flex-wrap">
            {menuItems.map((menu, idx) => (
              <li className="dropdown bottomNavDropdown" key={idx}>
                {menu.title} ▾
                <ul className="dropdown-menu">
                  {menu.subMenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <Link href={sub.href} className="dropdown-link">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div className="BottomNavRight">
          <IoSearchOutline className="nav-icon me-3" />
          <a href="/signup">
            <IoPersonOutline className="nav-icon me-3" />
          </a>
          <a href="/wishlist">
            <IoHeartOutline className="nav-icon me-3" />
          </a>
          <a href="/cart">
            <IoCartOutline className="nav-icon" />
          </a>
        </div>
      </div>
    </>
  );
}
