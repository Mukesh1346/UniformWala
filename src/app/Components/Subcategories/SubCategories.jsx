import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";  // Import Item separately
import pic1 from '@/Assets/Images/salon.avif'
import pic2 from '@/Assets/Images/doctor.jpg'
import pic3 from '@/Assets/Images/receptionist.jpg'
import pic4 from '@/Assets/Images/Corporate.jpg'
import pic5 from '@/Assets/Images/security.png'
import pic6 from '@/Assets/Images/salon.avif'

import "./subcategory.css";
import Image from "next/image";

export default function SubCategory() {
  const categories = [
    {
      id: 1,
      title: "Men's Wear",
      images: [
        pic5, pic6, pic3, pic4
      ]
    },
    {
      id: 2,
      title: "Women's Wear",
      images: [
        pic4, pic3, pic2, pic6
      ]
    },
    {
      id: 3,
      title: "School Uniforms",
      images: [
        pic1, pic2, pic3, pic4
      ]
    },
    {
      id: 4,
      title: "School Uniforms",
      images: [
        pic2, pic3, pic4, pic1
      ]
    },
    {
      id: 5,
      title: "School Uniforms",
      images: [
        pic4, pic1, pic2, pic3
      ]
    },
    {
      id: 6,
      title: "School Uniforms",
      images: [
        pic3, pic4, pic1, pic2
      ]
    }
  ];

  return (
    <>
      <div className="my-4">
        <h3 className="text-center">SUB-CATEGORIES</h3>
      </div>

      <div className="container my-5">
        <div className="row g-4">
          {categories.map((cat) => (
            <div key={cat.id} className="col-md-2 col-sm-6">
              <div className="category-card shadow">
                <Carousel interval={2000} indicators={false}>
                  {cat.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <Image
                        className="d-block w-100 category-img"
                        src={img}
                        alt={`${cat.title}-${index}`}
                      />
                    </CarouselItem>
                  ))}
                </Carousel>

                <div className="category-content text-center p-3">
                  <h5 className="categorytitle">{cat.title}</h5>
                  <p className="truncate1 ">Explore our latest collection of {cat.title}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
