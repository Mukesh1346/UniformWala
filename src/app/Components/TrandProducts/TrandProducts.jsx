"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./trandproducts.css";
import pic1 from "@/Assets/Images/salon.avif";
import pic2 from "@/Assets/Images/doctor.jpg";
import pic3 from "@/Assets/Images/receptionist.jpg";
import pic4 from "@/Assets/Images/Corporate.jpg";
import pic5 from "@/Assets/Images/security.png";
import pic6 from "@/Assets/Images/salon.avif";
import { useRouter } from "next/navigation";
import { FaRegEye } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";

export default function TrandProducts() {
  const router = useRouter();
  const [hoveredStates, setHoveredStates] = useState({});
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState("");

  const toggleHover = (id, isHovered) => {
    setHoveredStates((prev) => ({ ...prev, [id]: isHovered }));
  };

  const products = [
    { id: 0, defaultImg: pic3, hoverImg: pic1, productName: "Spa & Tunics", price: 1299 },
    { id: 1, defaultImg: pic4, hoverImg: pic2, productName: "Spa & Salon Blazers & Jackets", price: 1230 },
    { id: 2, defaultImg: pic5, hoverImg: pic3, productName: "Spa & Salon Dress", price: 1230 },
    { id: 3, defaultImg: pic6, hoverImg: pic4, productName: "Spa & Salon Female Kurti", price: 1230 },
    { id: 4, defaultImg: pic1, hoverImg: pic5, productName: "Spa & Salon Gown", price: 1230 },
    { id: 5, defaultImg: pic2, hoverImg: pic6, productName: "Hair Cutting Sheet & Cap", price: 1230 },
    { id: 6, defaultImg: pic3, hoverImg: pic1, productName: "Spa & Salon Pajamas", price: 1230 },
    { id: 7, defaultImg: pic4, hoverImg: pic2, productName: "Salon Apron", price: 1230 },
    { id: 8, defaultImg: pic5, hoverImg: pic3, productName: "Spa & Salon Shirts", price: 1230 },
    { id: 9, defaultImg: pic6, hoverImg: pic4, productName: "Slimming Gown", price: 1230 },
    { id: 10, defaultImg: pic1, hoverImg: pic5, productName: "Spa & Salon Trousers", price: 1230 },
    { id: 11, defaultImg: pic2, hoverImg: pic6, productName: "Spa & Salon Tunics Tops", price: 1230 },
  ];
  

  const handleCategoryClick = (productName) => {
    router.push(`/product/${encodeURIComponent(productName)}`);
  };

  const handleEnquiryClick = (productName) => {
    setEnquiryProduct(productName);
    setShowEnquiry(true);
  };

  const handleCloseEnquiry = () => {
    setShowEnquiry(false);
    setEnquiryProduct("");
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    alert(`Enquiry submitted for ${enquiryProduct}`);
    handleCloseEnquiry();
  };

  return (
    <>
      <div className="container Trand-midsec">
        <b>ALL PRODUCTS</b>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="Trand-product-container">
              {products.map(({ id, defaultImg, hoverImg, productName, price }) => (
                <div className="Trand-product-card" key={id}>
                  <motion.img
                    src={hoveredStates[id] ? hoverImg.src : defaultImg.src}
                    alt={productName}
                    className="Trand-product-image"
                    onMouseEnter={() => toggleHover(id, true)}
                    onMouseLeave={() => toggleHover(id, false)}
                    animate={{ scale: hoveredStates[id] ? 1.05 : 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <div className="Trand-product-info">
                    <p className="Trand-product-name">{productName}</p>
                    <p className="Trand-product-price">₹{price}</p>
                    <div className="Trand-buttonPortion">
                      <button
                        className=" Trand-enquiryBtn"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click
                          handleEnquiryClick(productName);
                        }}
                      >
                        Enquiry
                      </button>
                      <button
                        className=" Trand-addToCartBtn"
                        onClick={() => handleCategoryClick(productName)}
                      >
                        VIEW <FaRegEye  className="fs-5 ms-2"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="Trand-enquiry-modal">
          <div className="Trand-enquiry-modal-content">
            <span className="Trand-close-btn" onClick={handleCloseEnquiry}>
              &times;
            </span>
            <h3>Enquiry for {enquiryProduct}</h3>
            <form onSubmit={handleSubmitEnquiry}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="btn Trand-submitEnquiryBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
