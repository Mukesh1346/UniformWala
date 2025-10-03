"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./Counter.css"; // external css

export default function CounterSec() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { id: 1, value: 100, suffix: "+", label: "Uniform Designs" },
    { id: 2, value: 5000, suffix: "+", label: "Uniforms Manufactured" },
    { id: 3, value: 200, suffix: "+", label: "Corporate Clients" },
    { id: 4, value: 10, suffix: "k+", label: "Happy Customers" },
  ];

  return (
    <section className="counter-section py-5" ref={ref}>
      <div className="container text-center">
        <h6 className="sub-heading">OUR SUCCESS</h6>
        <h2 className="main-heading mb-5">
          We have a proven track record of manufacturing excellence.
        </h2>

        <div className="row">
          {stats.map((stat) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-4" key={stat.id}>
              <div className="counter-box">
                <h3 className="counter-value">
                  {inView ? (
                    <CountUp end={stat.value} duration={3} />
                  ) : (
                    "0"
                  )}{" "}
                  {stat.suffix}
                </h3>
                <p className="counter-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
