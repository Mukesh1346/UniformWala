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
  IoHomeOutline,
  IoGridOutline,
} from "react-icons/io5";

import { CgProfile } from "react-icons/cg";
import "./navbar.css";
import logo from "@/Assets/Images/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    {
      title: "Corporate",
      subMenu: [
        { label: "Corporate Blazers", href: "/products" },
        { label: "Corporate Female Dress", href: "/products" },
        { label: "Corporate Female Kurti", href: "/products" },
        { label: "Corporate Female Top", href: "/products" },
        { label: "Corporate Shirt", href: "/products" },
        { label: "Corporate T-Shirt", href: "/products" },
        { label: " Corporate Trousers", href: "/products" },
        { label: "Corporate Vest", href: "/products" },
      ],
    },
    {
      title: " Hotel Aprons",
      subMenu: [
        { label: "Hotel Bandana & Skull Cap", href: "/products" },
        { label: "Hotel Bed Sheet & Napkins", href: "/products" },
        { label: "Hotel Chef Coats", href: "/products" },
        { label: "Hotel Chef Trousers", href: "/products" },
        { label: "Hotel Accessories", href: "/products" },
        { label: "Hotel Housekeeping & Waiter Shirt", href: "/products" },
        { label: " Hotel Housekeeping & Waiter Trousers", href: "/products" },
        { label: "Hotel Housekeeping & Waiter Vest", href: "/products" },
      ],
    },
    {
      title: "Spa & Salon",
      subMenu: [
        { label: "Spa & Salon Blazers & Jackets", href: "/products" },
        { label: "Spa & Salon Dress", href: "/products" },
        { label: "Spa & Salon Female Kurti", href: "/products" },
        { label: "Spa & Salon Gown", href: "/products" },
        { label: "Spa & Salon Female Kurti", href: "/products" },
        { label: "Hair Cutting Sheet & Cap", href: "/products" },
        { label: "Spa & Salon Pajamas", href: "/products" },
        { label: "Spa & Salon Female Kurti", href: "/products" },
        { label: "Salon Apron", href: "/products" },
        { label: "Spa & Salon Shirts", href: "/products" },
        { label: "Slimming Gown", href: "/products" },
        { label: "Spa & Salon Trousers", href: "/products" },
        { label: "Spa & Salon Tunics Tops", href: "/products" },
      ],
    },
    {
      title: "Security",
      subMenu: [
        { label: "Security Jackets", href: "/products" },
        { label: "Security Shirts", href: "/products" },
        { label: "Security Trousers", href: "/products" },
      ],
    },
    {
      title: "Hospital",
      subMenu: [
        { label: "Doctors Lab Coat", href: "/products" },
        { label: "Nurse & Ward Boy Tunic", href: "/products" },
        { label: "Nurse & Ward Boy Trouser", href: "/products" },
        { label: "Patient Uniform", href: "/products" },
        { label: "OT Uniform", href: "/products" },
      ],
    },
    {
      title: " Industrial",
      subMenu: [
        { label: " Industrial Dungarees / Coverall", href: "/products" },
        { label: "Industrial Vest Jackets", href: "/products" },
        { label: "Industrial Shirts", href: "/products" },
        { label: "Industrial T-Shirts", href: "/products" },
        { label: "Industrial Trousers", href: "/products" },
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
              <li className="list-group-item me-3">
                <a className="AnchorLink" href="/aboutus">
                  About
                </a>{" "}
              </li>
              |
              <li className="list-group-item me-3">
                <a className="AnchorLink" href="/contactus">
                  Contact
                </a>
              </li>
              |
              <li className="list-group-item me-3">
                <a className="AnchorLink" href="/aboutus">
                  Blog
                </a>
              </li>
              |
              <li className="list-group-item me-3">
                <a className="AnchorLink" href="/aboutus">
                  FAQ
                </a>
              </li>
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

      {/* ----------- Mobile Bottom Navbar ----------- */}
      <div className="MobileBottomNav ">
        <div className="d-flex  align-items-center justify-content-around">
        <Link href="/" className="mobile-nav-icon">
          <IoHomeOutline size={24} />
          <span>Home</span>
        </Link>
        <Link href="/wishlist" className="mobile-nav-icon">
          <IoHeartOutline size={24} />
          <span>Wishlist</span>
        </Link>
        <Link href="/cart" className="mobile-nav-icon">
          <IoCartOutline size={24} />
          <span>Cart</span>
        </Link>
        <Link href="/products" className="mobile-nav-icon">
          <IoGridOutline size={24} />
          <span>All Products</span>
        </Link>
        <Link href="/signup" className="mobile-nav-icon">
          < CgProfile size={24} />
          <span>Profile</span>
        </Link>
        </div>
      </div>
    </>
  );
}
