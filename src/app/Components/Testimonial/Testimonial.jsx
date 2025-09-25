"use client";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./testimonial.css";
import pic1 from '@/Assets/Images/client1.jpg'
import pic2 from '@/Assets/Images/client2.jpg'
import pic3 from '@/Assets/Images/client3.jpg'
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Sharma",
    designation: "Factory Manager",
    image:pic1,
    review:
      "The uniforms delivered by Uniform vala are of top-notch quality. Our staff looks professional and feels comfortable all day!",
  },
  {
    name: "Anita Verma",
    designation: "HR Manager",
    image: pic2,
    review:
      "Uniform vala s custom designs and timely delivery have made a huge difference in our company image.",
  },
  {
    name: "Vikram Singh",
    designation: "Operations Head",
    image: pic3,
    review:
      "Exceptional quality and perfect fit! Our team loves the new uniforms.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title text-light">What Our Clients Say</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={4000}
        controls={false}
        indicators={true}
        fade={true}
        className="testimonial-carousel"
      >
        {testimonials.map((t, i) => (
          <Carousel.Item key={i}>
            <div className="testimonial-card">
              <p className="testimonial-review">"{t.review}"</p>
              <div className="testimonial-user">
                <Image src={t.image} alt={t.name} className="testimonial-img" />
                <div>
                  <h5 className="testimonial-name">{t.name}</h5>
                  <p className="testimonial-designation">{t.designation}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
