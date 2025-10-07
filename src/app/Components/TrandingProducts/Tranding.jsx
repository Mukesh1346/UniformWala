"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import pic1 from "@/Assets/Images/Slide.webp";
import pic2 from "@/Assets/Images/Slide1.webp";
import pic3 from "@/Assets/Images/Slide2.webp";
import pic4 from "@/Assets/Images/Slide3.webp";
import pic5 from "@/Assets/Images/Slide4.webp";
import pic6 from "@/Assets/Images/Slide5.webp";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import "./topUniform.css";

export default function Tranding() {
  const { state, dispatch, ACTIONS } = useAppContext();

  const [isClient, setIsClient] = useState(false); // ✅ fix hydration
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setIsClient(true); // ensures client-only rendering
  }, []);

  if (!isClient) return null; // prevents SSR mismatch

  const products = [
    {
      id: 7,
      title: "Salon",
      subtitle: "Stylish Salon Apron with Double Pocket",
      image: pic1,
      price: 0,
    },
    {
      id: 8,
      title: "Hospital",
      subtitle: "Full Sleeve Back Adjuster Lab Coat",
      image: pic2,
      price: 0,
    },
    {
      id: 9,
      title: "Reception",
      subtitle: "Stylish Grey Tunic for Women",
      image: pic3,
      price: 0,
    },
    {
      id: 10,
      title: "Corporate",
      subtitle: "Maroon Uniform Polo T-Shirt",
      image: pic4,
      price: 0,
    },
    {
      id: 11,
      title: "Security",
      subtitle: "Black Chef Coat with White Piping",
      image: pic5,
      price: 0,
    },
    {
      id: 12,
      title: "Spa",
      subtitle: "Stylish Spa Apron with Double Pocket",
      image: pic6,
      price: 0,
    },
  ];

  const toggleCart = (product) => {
    dispatch({
      type: ACTIONS.TOGGLE_CART_ITEM,
      payload: {
        id: product.id,
        name: product.title,
        price: product.price,
        size: "M",
        quantity: 1,
      },
    });
  };

  const isInCart = (product) =>
    state.cart.some((item) => item.id === product.id && item.size === "M");

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    alert("Enquiry submitted successfully!");
    closeModal();
  };

  return (
    <>
      <div className="trandUniformMainSec">
        <div className="text-center mb-5">
          <h2 className="tradingHeading">Top Tranding Products</h2>
        </div>

        <div className="container">
          <div className="row uniform-row">
            {products.map((item, index) => (
              <div className="col-md-2 col-6 topTrandingCol" key={index}>
                <Link
                  href="/top-tranding"
                  className="text-decoration-none text-dark"
                >
                  <div className="UniformCard">
                    <div className="d-flex justify-content-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="ProductImg"
                        priority
                      />
                    </div>
                    <div className="detailSec">
                      <h3 className="title text-dark">{item.title}</h3>
                      <p className="truncate">{item.subtitle}</p>

                      <div className="d-flex gap-1 justify-content-around">
                        <button
                          className="addtoCartTrandingBtn"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openModal(item);
                          }}
                        >
                          Enquiry
                        </button>

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleCart(item);
                          }}
                          className={`addtoCartTrandingBtn ${
                            isInCart(item)
                              ? "btn-danger"
                              : "btn-outline-primary"
                          }`}
                        >
                          {isInCart(item) ? "Remove" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center my-4">
            <Link href="/top-tranding">
              <button className="See-MoreBtn">See More</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      {showModal && (
        <div className="enquiry-modal active">
          <div className="enquiry-modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <h2>Enquiry for {selectedProduct?.title}</h2>
            <form className="enquiry-form" onSubmit={handleEnquirySubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
              <button type="submit">Submit Enquiry</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
