"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for collapse
import "./Faq.css"; // External CSS

export default function FAQ() {
  return (
    <main className="faq-section">
      <div className="container faq-container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <small className="faq-subtitle">F.A.Q</small>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quidem
            eius cum voluptatum quasi delectus.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="row align-items-start">
          {/* Left Side */}
          <div className="col-lg-5 col-md-12 mb-4">
            <p className="faq-small">Lorem ipsum dolor</p>
            <h2 className="faq-heading">Have Any Questions?</h2>
            <p className="faq-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quidem
              eius cum voluptatum quasi delectus assumenda culpa.
            </p>
            <button className="btn btn-success">Contact us</button>
          </div>

          {/* Right Side (Accordion) */}
          <div className="col-lg-7 col-md-12">
            <div className="accordion" id="faqAccordion">
              {[
                "Lorem ipsum dolor sit amet adipisicing ?",
                "Lorem ipsum dolor sit amet adipisicing ?",
                "Lorem ipsum dolor sit amet adipisicing ?",
                "Lorem ipsum dolor sit amet adipisicing ?",   
              ].map((question, index) => (          
                <div className="accordion-item" key={index}>  
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      <span className="faq-icon">?</span> {question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Details for FAQ {index + 1}.
                    </div>
                  </div>
                </div>
              ))} 
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
