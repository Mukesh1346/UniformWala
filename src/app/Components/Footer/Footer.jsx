"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaApple, FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from "react-icons/fa";
import { SiDiscover, SiMcafee } from "react-icons/si";
import './footer.css';
import Image from "next/image";
import logo from '@/Assets/Images/logo.jpg'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row footer-top">
          {/* Left Section */}
          <div className="col-md-3 mb-4">
            <div>
                <Image src={logo}alt="brandIcon" className="brandIcon" height={50} width={200}/>
            </div>

            <h5 className="footer-logo">Google <span className="text-warning">★ ★ ★ ★ ★</span></h5>
            <p className="small">Yesweprint.com has a Google Seller rating of 5 based on 200 rating and review</p>
            <div className="social-icons mt-3">
              <a href="#" className="me-2"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-title">Pages</h6>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              <li><a href="/login">Login </a></li>
              <li><a href="/signup">Add to Cart</a></li>
            </ul>
          </div>

        







          {/* Services */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-title">Services</h6>
            <ul className="list-unstyled">
              <li><a href="#">  Corporate</a></li>
              <li><a href="#">Hotel Aprons</a></li>
              <li><a href="#">Spa & Salon</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Hospital</a></li>
              <li><a href="#">Industrial</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-md-2 mb-4">
            <h6 className="footer-title">Help</h6>
            <ul className="list-unstyled">
              <li><a href="/policy">Privacy policy</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Promo Codes</a></li>
              <li><a href="#">Design Review</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Contact</h6>
            <p>2633 S Broadway, Los Angeles, CA 90007</p>
            <p><a href="#">💬 Chat with an Expert</a></p>
            <p><a href="tel:+18778074909">📞 Call (877) 807-4909</a></p>
            <p><a href="mailto:info@yesweprint.com">✉ info@yesweprint.com</a></p>
          </div>
        </div>

        {/* Payment icons */}
        <div className="footer-payments mb-3">
          <SiDiscover />
          <FaApple />
          <FaCcMastercard />
          <FaCcVisa />
          <FaCcAmex />
          <SiMcafee />
          <FaPaypal />
        </div>

        {/* Locations */}
        <div className="footer-locations mb-3">
          <a href="#">Los Angeles</a>
          <a href="#">Long Beach</a>
          <a href="#">San Diego</a>
          <a href="#">San Jose</a>
          <a href="#">San Francisco</a>
          <a href="#">Irvine</a>
          <a href="#">New York</a>
          <a href="#">Seattle, WA</a>
          <a href="#">Bakersfield, Ca</a>
          <a href="#">Las Vegas</a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom d-flex justify-content-between pt-3 border-top">
          <p>©2025, All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Site Map</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
