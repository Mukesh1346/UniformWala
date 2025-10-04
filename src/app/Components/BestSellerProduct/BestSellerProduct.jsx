"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./bestseller.css";
import pic1 from "@/Assets/Images/salon.avif";
import pic2 from "@/Assets/Images/doctor.jpg";
import pic3 from "@/Assets/Images/receptionist.jpg";
import pic4 from "@/Assets/Images/Corporate.jpg";
import pic5 from "@/Assets/Images/security.png";
import pic6 from "@/Assets/Images/salon.avif";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

export default function BestSellerProduct() {
  const router = useRouter();
  const [hoveredStates, setHoveredStates] = useState({});
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState("");
  const { state, dispatch, ACTIONS } = useAppContext();




  const toggleCart = (product) => {
    dispatch({
      type: ACTIONS.TOGGLE_CART_ITEM,
      payload: {
        id: product.id,
        name: product.productName,
        price: product.price,
        size: "M",
        quantity: 1,
      },
    })
  }

  const isInCart = (product) => state.cart.some((item) => item.id === product.id && item.size === "M");

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



  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6

  const LastProduct = currentPage * itemsPerPage;
  const FirstProduct = LastProduct - itemsPerPage;


  const currentProducts = products.slice(FirstProduct, LastProduct);



  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }


  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }


  const totalPages = Math.ceil(products.length / itemsPerPage)

  return (
    <>
      <div className="container midsec">
        <b>ALL PRODUCTS</b>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="product-container">
              {currentProducts.map(({ id, defaultImg, hoverImg, productName, price }) => (
                <Link href={`/product/${id + 1}`} className="text-decoration-none" key={id}>
                  <div className="product-card" >
                    <motion.img
                      src={hoveredStates[id] ? hoverImg.src : defaultImg.src}
                      alt={productName}
                      className="product-image"
                      onMouseEnter={() => toggleHover(id, true)}
                      onMouseLeave={() => toggleHover(id, false)}
                      animate={{ scale: hoveredStates[id] ? 1.05 : 1 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                    <div className="product-info">
                      <p className="product-name">{productName}</p>
                      <p className="product-price">₹{price}</p>
                      <div className="buttonPortion">
                        <button
                          className=" enquiryBtn"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click
                            handleEnquiryClick(productName);
                          }}
                        >
                          Enquiry
                        </button>


                        <button
                          className={`addToCartBtn ${isInCart({ id, productName, price }) ? "btn-danger" : "btn-outline-primary"}`}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation(); // prevent card click redirect
                            toggleCart({ id, productName, price });
                          }}
                        >
                          {isInCart({ id, productName, price }) ? "Remove from Cart" : "Add to Cart"}
                        </button>

                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* Pagination */}

              <nav className="pagination-nav mt-5">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                    <button className="page-link" onClick={prevPage}>
                      Previous
                    </button>
                  </li>

                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${currentPage === index + 1 ? "active" : ""
                        }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  <li
                    className={`page-item ${currentPage === totalPages && "disabled"
                      }`}
                  >
                    <button className="page-link" onClick={nextPage}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>



            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="enquiry-modal">
          <div className="enquiry-modal-content">
            <span className="close-btn" onClick={handleCloseEnquiry}>
              &times;
            </span>
            <h3>Enquiry for {enquiryProduct}</h3>
            <form onSubmit={handleSubmitEnquiry}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="btn submitEnquiryBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
