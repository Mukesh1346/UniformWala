// components/AboutUs.jsx
import Image from 'next/image';
import pic1 from '@/Assets/Images/professions1.jpg'
import pic2 from '@/Assets/Images/receptionist.jpg'
import pic3 from '@/Assets/Images/Background1.jpg'

export default function AboutUs() {
  return (
    <section className="about-us-section py-5 px-3 px-md-5 bg-light">
      {/* About Us Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Us</h2>
        <p className="text-muted fs-5">
          Uniform Vala s company and culture are a lot like our products  tailored with care, crafted with quality.
        </p>
      </div>

      {/* Team Photo */}
      <div className="text-center mb-5">
        <Image
          src={pic1}
          alt="Uniform Vala team"
          width={800}
          height={450}
          className="img-fluid rounded"
          layout="responsive"
        />
      </div>

      {/* Mission Section */}
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 order-2 order-md-1">
          <h3 className="fw-semibold mb-3">Our Mission: Stitching Excellence Into Every Uniform</h3>
          <p className="text-muted">
            At Uniform Vala, we believe in helping organizations not just look good — but feel confident.
            Our mission is to create comfortable, durable, and professional uniforms that empower
            businesses, schools, and industries to grow with pride.
          </p>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <Image
          src={pic2}
            alt="Mission image"
            width={600}
            height={400}
            className="img-fluid rounded"
            layout="responsive"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <Image
           src={pic3}
            alt="Our Story"
            width={600}
            height={600}
            className=" rounded"
          
          />
        </div>
        <div className="col-12 col-md-6">
          <h3 className="fw-semibold mb-3">Our Story</h3>
          <p className="text-muted">
            Founded in 2015, Uniform Vala began with a mission to revolutionize uniform manufacturing in India.
            We noticed a gap — uniforms were either too expensive or lacked quality.
          </p>
          <p className="text-muted">
            From a small workshop to a modern production house, we now serve schools, hospitals, offices,
            and industries nationwide. Our promise is simple: quality stitching, reliable delivery, and
            unmatched value.
          </p>
        </div>
      </div>
    </section>
  );
}
