"use client";
import React, { useState } from "react";
import "./productdetails.css"; // external css
import Image from "next/image";
import pic1 from '@/Assets/Images/salon.avif'
import pic2 from '@/Assets/Images/doctor.jpg'
import pic3 from '@/Assets/Images/receptionist.jpg'
import pic4 from '@/Assets/Images/Corporate.jpg'
import pic5 from '@/Assets/Images/security.png'
import pic6 from '@/Assets/Images/salon.avif'

const ProductDetails = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="container product-details-container py-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          <div className="main-image mb-3">
            <Image src={mainImage} alt="Uniform" className="img-fluid rounded shadow" />
          </div>
          <div className="d-flex gap-2 thumbnail-container">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail-img ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 product-info">
          <h2 className="product-title">Corporate Formal Uniform</h2>
          <p className="product-id">Product ID: UNI-2025-001</p>
          <p className="product-price">₹1,299.00</p>
          <p className="product-description">
            High-quality formal corporate uniform designed for durability and comfort. 
            Perfect for staff, receptionists, and office executives. 
            Available in multiple sizes and colors, with custom logo embroidery option.
          </p>

          <div className="options">
            <div className="mb-3">
              <label className="form-label fw-bold">Size:</label>
              <select className="form-select">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Color:</label>
              <div className="color-options d-flex gap-2">
                <span className="color-circle bg-primary"></span>
                <span className="color-circle bg-dark"></span>
                <span className="color-circle bg-secondary"></span>
              </div>
            </div>
          </div>

          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-dark px-4">Add to Cart</button>
            <button className="btn btn-outline-danger px-4">❤️ Wishlist</button>
          </div>

          <div className="mt-4 extra-info">
            <p><strong>Fabric:</strong> Premium Cotton Blend</p>
            <p><strong>Delivery:</strong> 5-7 business days</p>
            <p><strong>Customization:</strong> Logo embroidery available for bulk orders</p>
          </div>

          <button className="btn btn-success mt-3 px-4">Request Bulk Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
