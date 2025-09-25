"use client"
import React, { useState, useEffect } from "react";
import pic1 from '@/Assets/Images/Banner1.jpeg'
import pic2 from '@/Assets/Images/Banner2.jpg'
import pic3 from '@/Assets/Images/slide1.jpg'
import pic4 from '@/Assets/Images/slide2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroCarousel.css';
import Image from "next/image";
import { Modal, Button } from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Left section - static background
  const hero = {
    image: pic1,
    title: "Welcome to Our Site",
    subtitle: "Discover amazing products every day",
    buttonText: "Shop Now",
    buttonLink: "#shop"
  };

  // Right carousel
  const rightSlides = [
    { image: pic3, caption: "Fashion" },
    { image: pic4, caption: "Accessories" },
    { image: pic3, caption: "Footwear" }
  ];

  const [index, setIndex] = useState(0);

  // Auto increment right carousel every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rightSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid ">
      <div className="row hero-section align-items-center">
        {/* Left Section */}
        <div className="col-md-8 hero-left position-relative text-white">
          <Image src={hero.image} alt="Hero" className="img-fluid hero-bg" />
          <div className="hero-overlay p-4">
            <h1>{hero.title}</h1>
            <p>{hero.subtitle}</p>
            <Button variant="" className="buttonoverlay" href={hero.buttonLink} onClick={handleShow}  >{hero.buttonText}</Button>
          </div>
        </div>


        <Modal show={show} onHide={handleClose} centered >
          <Modal.Header closeButton>
            <Modal.Title>
              Fill the Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="formSec mb-3">
                <label htmlFor=""> Name *</label>
                <input type="text" className="form-control" />
              </div>
              {/* <div className="formSec mb-3">
                  <label htmlFor=""> Company Name *</label>
                  <input type="text" className="form-control" />
                 </div> */}


              <div className="formSec mb-3">
                <label htmlFor="">Email *</label>
                <input type="email" className="form-control" />
              </div>

              <div className="formSec mb-3">
                <label htmlFor="">Message *</label>
                <textarea className="form-control"></textarea>
              </div>
            </form>


          </Modal.Body>


        </Modal>



        {/* Right Section */}
        <div className="col-md-4">
          <div className="right-carousel">
            <Image
              src={rightSlides[index].image}
              alt={rightSlides[index].caption}
              className="d-block w-100 rounded shadow-sm"
            />
            <div className="text-center mt-2">
              {/* <h5>{rightSlides[index].caption}</h5> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
